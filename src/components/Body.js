import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [ListofRestaurent, SetListofRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [pageOffset, setPageOffset] = useState("");




  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.686287158579507&lng=75.84124092012853&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING${
        pageOffset ? `&nextOffset=${pageOffset}` : ""
      }`
    );
    const json = await data.json();
    console.log(json);
    const newRestaurants = json?.data?.cards[4]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants || []
    ;
    
    // Filter out duplicates before updating the state
    // const uniqueNewRestaurants = newRestaurants.filter(newRestaurant => (
    //   !ListofRestaurent.some(oldRestaurant => oldRestaurant.info.id === newRestaurant.info.id)
    // ));
  
    SetListofRestaurent(newRestaurants);
    setFilteredRestaurant(newRestaurants);
    
    // Get the nextOffset value from the updated payload structure
    // setPageOffset(json?.nextOffset || "");
  };
  const onlineStatus=useOnlineStatus();
  if(onlineStatus==false)return<h1>looks Like you're offline!! Please check you internet connection</h1> ;

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchData();
    }
  };

 

  const handleSearch = () => {
    const filteredRest = ListofRestaurent.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRest);
  };

  return ListofRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center justify-center">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="search-box border border-solid border-black rounded-lg p-2  "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurant..."
            onKeyDown={(e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }}
          />
          <button onClick={handleSearch} className="px-4 py-2 bg-green-100 m-4 rounded-lg ">Search</button>
        </div>
        <button
          className="filter-btn px-4 py-2 bg-gray-300"
          onClick={() => {
            const filtered = ListofRestaurent.filter(
              (res) => res.info.avgRatingString <= 4.3
            );
            setFilteredRestaurant(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div> 
      <div className="res-container flex flex-wrap justify-center">
        {filteredRestaurant.map((xyz, index) => (
          <Link to={"/restaurents/" + xyz.info.id} key={index}>
            <RestaurentCard resdata={xyz} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
