import { FaCheck } from "react-icons/fa6";
import { HiOutlineX } from "react-icons/hi";
import { FaCircleInfo } from "react-icons/fa6";

export default function CardOfAllPlans(){
    const InfoArr = [{id:1,Name:"Access All Text Lessons",     Icon:<FaCheck className="text-green-500"/>},
                    {id:2,Name:"Access All Videos Lessons",   Icon:<FaCheck className="text-green-500"/> },
                    {id:3,Name:"Appear On Lessons",           Icon:<FaCheck className="text-green-500"/> },
                    {id:4,Name:"Browse Content Wihout Ads",   Icon:<FaCheck className="text-green-500"/> },
                    {id:5,Name:"Access All Assignments",      Icon:<FaCheck className="text-green-500"/> },
                    {id:6,Name:"Get Daily Prizes",            Icon:<FaCheck className="text-green-500"/> },
                    {id:7,Name:"Earn Cerificate",             Icon:<FaCheck className="text-green-500"/> },
                    {id:8,Name:"1 GB Space For Hosting Files",Icon:<HiOutlineX className="text-red-500"/> },
                    {id:9,Name:"Access Badge System",         Icon:<HiOutlineX className="text-red-500"/> },

   ];
    return(
         <div className="bg-white p-3 shadow-2xl relative">
             <div className="border-blue-500 border-2 mb-5">
            <div className="bg-blue-500 m-0.5 text-center py-3 text-white">
                 <h1 className="font-semibold ml-1">Basic</h1>
                  <div className="flex justify-center">
                    <p className="text-sm mr-1">$</p>
                    <p className="text-2xl">7.99</p>
                  </div>
            </div>
           </div>
            {InfoArr.map(info => (
                <div> 
                  
           <div className="flex justify-between ">
             <div className="flex">
                <div className="mr-1 size-3.5 mt-0.5">{info.Icon}</div>
                <h1 className="text-[11px]">{info.Name}</h1>
             </div>
                <FaCircleInfo className="text-gray-500 size-3 mt-0.5"/>
           </div>

           <hr className="text-gray-300 my-3"></hr>
          
                </div>
            ))}
            <button className="bg-blue-500 hover:bg-blue-400 text-white rounded text-xs px-2 py-0.5 cursor-pointer">Join</button>
          
         </div>
    )
}