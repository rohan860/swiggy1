import { useEffect, useState } from "react";
import { MENU_API } from "./constant";
const useRestaurentMenu = (resId)=>{
    const [resInfo,setResInfo ]=useState(null)
        // fetchData
        useEffect(()=>{
            fetchData();
        },[]);
        const fetchData = async () =>{
            const data= await fetch(MENU_API + resId ); 
            const json = await data.json();
            setResInfo(json.data);
            // console.log(json.data);
        }

    return resInfo;
}
export default useRestaurentMenu;