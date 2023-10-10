import { useContext, useEffect, useRef } from "react"
import { useOnScreen } from "./useOnScreen";
import { NavContext } from "../context/NavContext";

export const useNav = (NavLinkId) => {

const ref=useRef(null);
const { setActiveLinkId } = useContext(NavContext)


const isOnScreen= useOnScreen(ref);
useEffect(()=>{
    if(isOnScreen){
setActiveLinkId(NavLinkId)
    }
},[isOnScreen,setActiveLinkId,NavLinkId])

  return ref;
}
