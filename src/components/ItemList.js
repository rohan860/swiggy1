import { useDispatch } from "react-redux";
import { url } from "../Utils/constant";
import {addItem } from "../Utils/cartSlice"
import toast from "react-hot-toast";
const ItemList = ({items})=>{
    const dispatch = useDispatch();
    const handleAddItems=(itemds)=>{
        // dispatch an action
        dispatch(addItem(itemds))
        toast.success("Added");
    }
    // console.log(items);
    return(
        <div>
            <div>
                {
                    items.map((item) =>( <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex  " >
                    <div className="w-9/12" >
                    
                        <div className="py-2" >
                        <span className="" >{item.card.info.name}</span>
                        <span>- ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}  </span>
                        
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                    <div className="absolute ">
                    <button className="p-2 bg-white hover:bg-green-400 hover:text-white transition-all duration-200   mx-16 rounded-lg text-green-400 font-bold text-xl shadow-lg h" 
                    onClick={()=>handleAddItems(item)}
                    
                    >Add +</button>
                    </div>
                    <img src={url + item.card.info.imageId} alt="" className="w-full  rounded-lg" />
                    </div>
                    </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default ItemList;