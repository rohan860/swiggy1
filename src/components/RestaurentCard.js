import {url} from '../Utils/constant'

const RestaurentCard = (props) => {
    const { resdata,id } = props;
//    console.log(resdata);
//    console.log(cardData);
//    console.log(resdata.info.cloudinaryImageId);
    return(
        <div className="res-card m-4 p-4 w-[260px] bg-gray-200 rounded-lg h-[580px] flex flex-col items-center justify-items-center">
        <img 
            src={url + resdata.info.cloudinaryImageId} 
            className="res-logo rounded-md object-cover w-11/12  h-56 " 
            alt="" 
        />
            <hr />
           <h3 className='font-bold py-4 text-lg'>{resdata.info.name}</h3>
<hr />
           <p>{resdata.info.locality}, {resdata.info.areaName}</p>
           <hr />
           <p>Cuisines: {resdata.info.cuisines.join(', ')}</p>
           <hr />
           <p>Average Rating: {resdata.info.avgRatingString}⭐</p>
           <hr />
           <p>Delivery Time: {resdata.info.sla.deliveryTime} mins</p>

            {/* <h4>{resdata.data.name} Stars ✨ </h4> */}
            {/* <h4>{resdata.delivery_time}</h4> */}

        </div>
    )
}

export default RestaurentCard;