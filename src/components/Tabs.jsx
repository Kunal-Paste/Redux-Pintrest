import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state)=>state.search.activeTab)

  return <div className="flex gap-5 p-10 items-center justify-center">{
       tabs.map(function(element,index){
         return <button key={index} className={`${(activeTab==element ? 'bg-emerald-500':'bg-gray-500')} p-10 rounded-3xl uppercase cursor-pointer active:scale-95`} onClick={()=>{
            dispatch(setActiveTab(element))
         }}>{element}</button>
       })
    }</div>;
};

export default Tabs;
