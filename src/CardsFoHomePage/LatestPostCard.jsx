import { CiHeart } from "react-icons/ci";
import { IoChatbubblesOutline } from "react-icons/io5";



export default function LatestPostCard(){
    return(

        <div className="bg-white rounded-md shadow-2xl">

          <h1 className="ml-3 mt-3 mb-4 font-semibold">Latest Post</h1>

          <div className="flex ml-3">
            <img src="./imgs/avatar.png" className="size-7 lg:size-9"/>
          <div className="ml-3">
            <h1 className="text-[10px] lg:text-xs font-semibold">Osama Elzero</h1>
            <p className="text-[8px] lg:text-[10px] text-gray-400">About 3 Hours Ago</p>
          </div>
          </div>

          <hr className="text-gray-200 my-2"></hr>

          <p className="text-[10px] lg:text-xs mx-3 lg:my-6 lg:mx-4 lg:font-semibold">You Can Fool All Of The People Some Of The Time, And 
            Some Of The People All Of The Time, But You Can't Foll 
            All Of The People All Of The Time.
          </p>

          <hr className="text-gray-200 my-2"></hr>
          
          
          <div className="flex justify-between mx-3 ">
           <div className="flex">
            <CiHeart className="size-3 lg:size-4 text-gray-400 hover:text-gray-600 "/>
            <p className="text-[8px] lg:text-[10px] text-gray-400">1.8K</p>
           </div>
            <div className="flex">
            <IoChatbubblesOutline className="size-3 lg:size-4 text-gray-400 hover:text-gray-600 "/>
            <p className="text-[8px] lg:text-[10px] text-gray-400">500</p>
           </div>
          </div>

        </div>
    )
}