import { FaRegRectangleList } from "react-icons/fa6";
import { BiLoaderCircle } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegRectangleXmark } from "react-icons/fa6";

export default function TiketsStatisticsCrad(){
    return(
        <div className="bg-white rounded-md shadow-2xl overflow-auto"> 
          
              <h1 className="ml-3 mt-3 font-semibold">Tickets Statistics</h1>
              <p className="ml-3 text-xs text-gray-800/50 font-semibold">Everything About Support Tickets</p>

              <div className="text-sm grid grid-cols-2 gap-4 mx-3 mt-4 lg:text-lg">
                  <div className="grid place-items-center hover:bg-gray-200 border border-gray-500/30 rounded-lg px-10 py-4 lg:px-19 lg:py-6">
                    <FaRegRectangleList className=" text-orange-400 lg:size-6"/>
                    <h1 className="font-bold">2500</h1>
                    <p className="text-[10px] lg:text-[12px] text-gray-800/50 font-semibold">Total</p>
                  </div>
                  <div className="grid place-items-center hover:bg-gray-200 border border-gray-500/30 rounded-lg px-10 py-4 lg:px-19 lg:py-6">
                    <BiLoaderCircle className=" text-blue-600 lg:size-6"/>
                    <h1 className="font-bold ">500</h1>
                    <p className="text-[10px] lg:text-[12px] text-gray-800/50 font-semibold ">Pending</p>
                  </div>
              </div>
              <div className="text-sm grid grid-cols-2 gap-4 mx-3 my-4 lg:text-lg">
                  <div className="grid place-items-center hover:bg-gray-200 border border-gray-500/30 rounded-lg px-10 py-4 lg:px-19 lg:py-6">
                    <FaRegCheckCircle className=" text-green-500 lg:size-6"/>
                    <h1 className="font-bold ">1900</h1>
                    <p className="text-[10px] lg:text-[12px] text-gray-800/50 font-semibold">Closed</p>
                  </div>
                   <div className="grid place-items-center hover:bg-gray-200 border border-gray-500/30 rounded-lg px-10 py-4 lg:px-19 lg:py-6">
                    <FaRegRectangleXmark className=" text-red-500 lg:size-6"/>
                    <h1 className="font-bold ">100</h1>
                    <p className="text-[10px] lg:text-[12px] text-gray-800/50 font-semibold">Deleted</p>
                  </div>
              </div> 
             
       

        </div>
    )
}