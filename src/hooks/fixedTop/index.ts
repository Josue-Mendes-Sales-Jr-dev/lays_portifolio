import {useEffect} from "react"

export const FixedTop=()=>{
    const handleLoad=()=>{
        if(window.scrollY > 0){
         window.scrollTo(0,0)
        }
    }
    useEffect(()=>{
     handleLoad();
    },[])
    
}