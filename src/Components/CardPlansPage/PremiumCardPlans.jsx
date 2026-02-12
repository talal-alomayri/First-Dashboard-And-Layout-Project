import { FaCheck } from "react-icons/fa6";
import { HiOutlineX } from "react-icons/hi";
import { FaCircleInfo } from "react-icons/fa6";

export default function CardOfAllPlans(){
    return(
         <div className="bg-white p-3 shadow-2xl relative">
           <div className="border-amber-500 border-2 mb-5">
            <div className="bg-amber-500 m-0.5 text-center py-3 text-white">
                 <h1 className="font-semibold ml-1">Premium</h1>
                  <div className="flex justify-center">
                    <p className="text-sm mr-1">$</p>
                    <p className="text-2xl">19.99</p>
                  </div>
            </div>
           </div>

           <div className="flex justify-between ">
             <div className="flex">
                <FaCheck className="text-green-500 mr-1 size-3.5 mt-0.5"/>
                <h1 className="text-[11px]">Access All Text Lessons</h1>
             </div>
                <FaCircleInfo className="text-gray-500 size-3 mt-0.5"/>
           </div>

           <hr className="text-gray-300 my-3"></hr>
           <div className="flex justify-between ">
             <div className="flex">
                <FaCheck className="text-green-500 mr-1 size-3.5 mt-0.5"/>
                <h1 className="text-[11px]">Access All Videos Lessons</h1>
             </div>
                <FaCircleInfo className="text-gray-500 size-3 mt-0.5"/>
           </div>

           <hr className="text-gray-300 my-3"></hr>
           <div className="flex justify-between ">
             <div className="flex">
                <FaCheck className="text-green-500 mr-1 size-3.5 mt-0.5"/>
                <h1 className="text-[11px]">Appear On Lessons</h1>
             </div>
                <FaCircleInfo className="text-gray-500 size-3 mt-0.5"/>
           </div>

           <hr className="text-gray-300 my-3"></hr>
           <div className="flex justify-between ">
             <div className="flex">
                  <FaCheck className="text-green-500 mr-1 size-3.5 mt-0.5"/>
                <h1 className="text-[11px]">Browse Content Wihout Ads</h1>
             </div>
                <FaCircleInfo className="text-gray-500 size-3 mt-0.5"/>
           </div>

           <hr className="text-gray-300 my-3"></hr>
           <div className="flex justify-between ">
             <div className="flex">
                  <FaCheck className="text-green-500 mr-1 size-3.5 mt-0.5"/>
                <h1 className="text-[11px]">Access All Assignments</h1>
             </div>
                <FaCircleInfo className="text-gray-500 size-3 mt-0.5"/>
           </div>

           <hr className="text-gray-300 my-3"></hr>
           <div className="flex justify-between ">
             <div className="flex">
                 <FaCheck className="text-green-500 mr-1 size-3.5 mt-0.5"/>
                <h1 className="text-[11px]">Get Daily Prizes</h1>
             </div>
                <FaCircleInfo className="text-gray-500 size-3 mt-0.5"/>
           </div>

           <hr className="text-gray-300 my-3"></hr>
           <div className="flex justify-between ">
             <div className="flex">
                  <FaCheck className="text-green-500 mr-1 size-3.5 mt-0.5"/>
                <h1 className="text-[11px]">Earn Cerificate</h1>
             </div>
                <FaCircleInfo className="text-gray-500 size-3 mt-0.5"/>
           </div>

           <hr className="text-gray-300 my-3"></hr>
           <div className="flex justify-between ">
             <div className="flex">
                 <FaCheck className="text-green-500 mr-1 size-3.5 mt-0.5"/>
                <h1 className="text-[11px]">1 GB Space For Hosting Files</h1>
             </div>
                <FaCircleInfo className="text-gray-500 size-3 mt-0.5"/>
           </div>

           <hr className="text-gray-300 my-3"></hr>
           <div className="flex justify-between ">
             <div className="flex">
                 <FaCheck className="text-green-500 mr-1 size-3.5 mt-0.5"/>
                <h1 className="text-[11px]">Access Badge System</h1>
             </div>
                <FaCircleInfo className="text-gray-500 size-3 mt-0.5"/>
           </div>

           <hr className="text-gray-300 my-3"></hr>

           <h1 className=" text-gray-400 text-xs text-center px-1.5 py-px">This Is Your Current Plan</h1>
         </div>
    )
}