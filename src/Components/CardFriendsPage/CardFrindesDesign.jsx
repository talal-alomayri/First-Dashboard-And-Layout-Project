import { IoIosCall } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import { RxSlider } from "react-icons/rx";
import { PiCalculatorBold } from "react-icons/pi";



export default function CardFriendsDesign({FName, FJob, Fnums, FProjects, FArticles, FJoined ,Imgs ,VIP}){
    return(
         <div className="bg-white rounded-md shadow-2xl relative">
           <div className="flex text-gray-500">
             <IoIosCall     className="bg-stone-200 rounded-4xl size-5 m-1 py-1"/>
             <FaRegEnvelope className="bg-stone-200 rounded-4xl size-5 m-1 py-1"/>
           </div>
           
          <div className="flex justify-center -mt-3">
           <img src={Imgs} className="rounded-4xl size-16 "/>
          </div>

          <h1 className="text-xs text-center font-semibold mt-2">{FName}</h1>
          <p className="text-[10px] text-center text-gray-500">{FJob}</p>

          <hr className="text-gray-200 mx-3 my-3"></hr>
         <div className="flex justify-between">
          <div>
          <div className="flex ml-3">
            <CiFaceSmile className="size-3"/>
            <p className="text-[8px] ml-1 ">{Fnums}</p>
          </div>
          <div className="flex ml-3">
            <RxSlider className="size-3"/>
            <p className="text-[8px] ml-1 ">{FProjects}</p>
          </div>
          <div className="flex ml-3">
            <PiCalculatorBold className="size-3"/>
            <p className="text-[8px] ml-1 ">{FArticles}</p>
          </div>
          </div>

          <div>
            <h1 className="mr-6 text-2xl text-amber-500 font-semibold opacity-25">{VIP}</h1>
          </div>
         </div>

           <hr className="text-gray-200 mx-3 my-3 "></hr>

          <div className="flex justify-between mx-3">
           <p className="text-[8px]">{FJoined}</p>
           <div className="flex gap-0.5">
           <button className="text-[10px] bg-blue-600 hover:bg-blue-400 text-white rounded-md p-1 -mt-1 mb-2 ">Profile</button>
           <button className="text-[10px] bg-red-500 hover:bg-red-400 text-white rounded-md p-1  -mt-1 mb-2">Remove</button>
           </div>
          </div>

        </div>
    )
}