import { FaDollarSign } from "react-icons/fa6";
import { BsChatSquareFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";


export default function YearlyTargestCrad(){
    return(
        <div className="bg-white rounded-md pb-5 shadow-2xl">
          
              <h1 className="ml-3 mt-3 font-semibold">Yearly Targets</h1>
              <p className="ml-3 mb-3 text-xs text-gray-800/50 font-semibold">Targets Of The Year</p> 

              <div className="flex mb-4">
                <div className="bg-blue-200 pt-6 px-6 ml-3 mr-3 -mb-1 mt-1">
                <FaDollarSign className="text-blue-600"/>
                </div> 
                 <div>
                  <h1 className="mt-2 text-xs text-gray-800/50 font-semibold">Money</h1>
                  <div className="flex">
                  <h1 className="text-xs font-semibold mt-2 mb-3">$20.000</h1>
                  <BsChatSquareFill className="size-5 mt-3 ml-21 lg:ml-53 text-blue-600"/>
                  <p className="mt-3.5 -ml-4.5 text-[8px] text-white">%80</p>
                  </div>
                  <div className="flex ">
                   <div className="bg-blue-200 w-44 lg:w-80 h-full">
                    <div className="bg-blue-600 w-35 lg:w-67 h-full text-[2px] text-blue-600 ">-</div>
                   </div>
                  </div>
                 </div>
              </div>

               <div className="flex mb-3">
                <div className="bg-orange-200 pt-6 px-6 ml-3 mr-3">
                <FaCode className="text-orange-500"/>
                </div> 
                 <div>
                  <h1 className="mt-2 text-xs text-gray-800/50 font-semibold">Projects</h1>
                  <div className="flex">
                  <h1 className="text-xs font-semibold mt-2 mb-3">24</h1>
                  <BsChatSquareFill className="size-5 mt-3 ml-19 lg:ml-39 text-orange-500"/>
                  <p className="mt-3.5 -ml-4.5 text-[8px] text-white">%55</p>
                  </div>
                  <div className="flex ">
                   <div className="bg-orange-200 w-44 lg:w-80 h-full">
                    <div className="bg-orange-500 w-25 lg:w-45 h-full text-[2px] text-orange-500 ">-</div>
                   </div>
                  </div>
                 </div>
              </div>

               <div className="flex">
                <div className="bg-green-200 pt-6 px-6 ml-3 mr-3">
                <FaUser className="text-green-500"/>
                </div> 
                 <div>
                  <h1 className="mt-2 text-xs text-gray-800/50 font-semibold">Team</h1>
                  <div className="flex">
                  <h1 className="text-xs font-semibold mt-2 mb-3">12</h1>
                  <BsChatSquareFill className="size-5 mt-3 ml-27 lg:ml-55 text-green-500"/>
                  <p className="mt-3.5 -ml-4.5 text-[8px] text-white">%75</p>
                  </div>
                  <div className="flex ">
                   <div className="bg-green-200 w-44 lg:w-80 h-full">
                    <div className="bg-green-500 w-33 lg:w-61 h-full text-[2px] text-green-500 ">-</div>
                   </div>
                  </div>
                 </div>
              </div>
              

        </div>
    )
}