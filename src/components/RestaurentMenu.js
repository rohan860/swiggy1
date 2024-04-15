import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utils/constant";
import useRestaurentMenu from "../Utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
const RestaurantMenu = ()=>{
// const [resInfo,setResInfo]=useState(null);
const {resId}= useParams();
const resInfo = useRestaurentMenu(resId);
const [showIndex,setShowIndex]=useState(0);
 

// console.log(resId);
//     useEffect(()=>{
//         fetchMenu();
//     },[]);
// const fetchMenu=async ()=>{
//     const data = await fetch(MENU_API+resId);
//     const json = await data.json();
//     console.log(json);
//     console.log(json.data);
//     setResInfo(json.data);
// }
    // Assuming resInfo is fetched asynchronously and set using useState hook

    // Check if resInfo is null or undefined before attempting to destructure properties
    const { name, cuisines, city, areaName, avgRating, cloudinaryImageId, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};
    const itemCards = [
        ...resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [],
        ...resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || []
      ];
      // console.log(itemCards);
    // console.log(itemCards);
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    .filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories);
    if(resInfo === null ){
    return <Shimmer/> ;
    }
    // console.log(resInfo.cards[4].card.card.itemCards[1].card.info.name);
    return (
        <div className="menu text-center">
            <h1 className="font-bold mt-10 text-2xl my-6">{name}</h1>
            <h2 className="font-bold text-lg" >{cuisines?.join(" , ")} - {costForTwoMessage}  </h2>


            {/* Categories Accordian */}
            {/* <ul className="newlist">
  {itemCards && itemCards.map((item, index) => (
    
    <li key={index}>{item.card.info.name} - Rs {item.card.info.price / 100 || item.card.info.defaultPrice / 100 }</li>
  ))}
</ul> */}

        {
          categories.map((category,index)=> (<RestaurentCategory key={category?.card?.card.title} data={category?.card?.card}
          showItems={index === showIndex ? true :false}
          // showItems={true}
          setShowIndex={()=> setShowIndex(index)}
           />))
        }


        </div>
    );
};

export default RestaurantMenu;