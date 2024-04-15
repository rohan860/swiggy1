import { useState } from "react";
import ItemList from "./ItemList";
const RestaurentCategory =({data})=>{
    const [showItems,setShowItems]= useState(data.title == "Recommended");
    console.log(data);
    // const handleClick= ()=>{
    //     showItems ? setShowItems(false):setShowItems(true);
    // }
    return(
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto bg-gray-50 shadow-lg p-4 my-6 ">
                <div className="flex justify-between cursor-pointer " onClick={()=>(
                    showItems ? setShowItems(false):setShowItems(true)
                )}>
                <span className="font-bold text-lg">
                    {data.title}
                    ({data.itemCards.length})
                </span>
                <span> ⬇️</span>
                </div>
               
            {showItems &&
                <ItemList items={data.itemCards} />}
            </div>
            {/* Accordian Body */}
        </div>
    )
}
export default RestaurentCategory;