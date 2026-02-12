import { FaCircle } from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";


export default function RemindersCard(){
    return(

        <div className="bg-white rounded-md shadow-2xl">

          <h1 className="ml-3 mt-3 mb-4 font-semibold">Reminders</h1>

          <div className="flex ml-3 my-5">
     
           <FaCircle className="size-3 lg:size-4 text-blue-600"/>
           <TfiLayoutLineSolid className="w-0.5 bg-blue-600 mx-2 h-8 lg:h-10 -mt-2"/>

           <div className="-mt-1.5">
             <h1 className="text-[10px] lg:text-xs font-semibold">Check My Tasks List</h1>  
             <p className="text-[8px] lg:text-[10px] text-gray-400">28/09/2022-12:00am</p>          
           </div>


          </div>
          <div className="flex ml-3 my-5">
     
           <FaCircle className="size-3 lg:size-4 text-green-500"/>
           <TfiLayoutLineSolid className="w-0.5 bg-green-500 mx-2 h-8 lg:h-10 -mt-2"/>

           <div className="-mt-1.5">
             <h1 className="text-[10px] lg:text-xs font-semibold">Check My Project</h1>  
             <p className="text-[8px] lg:text-[10px] text-gray-400">26/10/2022-12:00am</p>          
           </div>


          </div>
          <div className="flex ml-3 my-5">
     
           <FaCircle className="size-3 lg:size-4 text-orange-500"/>
           <TfiLayoutLineSolid className="w-0.5 bg-orange-500 mx-2 h-8 lg:h-10 -mt-2"/>

           <div className="-mt-1.5">
             <h1 className="text-[10px] lg:text-xs font-semibold">Call All My Clients</h1>  
             <p className="text-[8px] lg:text-[10px] text-gray-400">05/11/2022-12:00am</p>          
           </div>


          </div>
          <div className="flex ml-3 my-5">
     
           <FaCircle className="size-3 lg:size-4 text-red-500"/>
           <TfiLayoutLineSolid className="w-0.5 bg-red-500 mx-2 h-8 lg:h-10 -mt-2"/>

           <div className="-mt-1.5">
             <h1 className="text-[10px] lg:text-xs font-semibold">Finish The Development Workshop</h1>  
             <p className="text-[8px] lg:text-[10px] text-gray-400">20/12/2022-12:00am</p>          
           </div>


          </div>

        </div>
    )
}