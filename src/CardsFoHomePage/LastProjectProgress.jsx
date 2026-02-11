import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";


export default function LastProjectProgress(){
    return(

        <div className="bg-white rounded-md shadow-2xl">
           
           <h1 className="ml-3 mt-3 mb-4 font-semibold">Last Project Progress </h1>

           <div className="flex ml-4">

             <FaCircle className="size-3 lg:size-4 -mr-4 lg:-mr-5 mt-0.5 text-blue-600"/>
             <FaRegCircle className="size-5 lg:size-6  -mt-0.5 text-blue-600"/>
 
             <h1 className="text-[10px] lg:text-xs ml-2">Got The Poject</h1>

           </div>

           <TfiLayoutLineSolid className="bg-blue-600 w-px ml-5.25 lg:ml-5.75 lg:w-0.5"/>


            <div className="flex ml-4">

             <FaCircle className="size-3 lg:size-4 -mr-4 lg:-mr-5 mt-0.5 text-blue-600"/>
             <FaRegCircle className="size-5 lg:size-6  -mt-0.5 text-blue-600"/>
 
             <h1 className="text-[10px] lg:text-xs ml-2">Started The Project</h1>

           </div>

           <TfiLayoutLineSolid className="bg-blue-600 w-px ml-5.25 lg:ml-5.75 lg:w-0.5"/>
            <div className="flex ml-4">

             <FaCircle className="size-3 lg:size-4 -mr-4 lg:-mr-5 mt-0.5 text-blue-600"/>
             <FaRegCircle className="size-5 lg:size-6 -mt-0.5 text-blue-600"/>
 
             <h1 className="text-[10px] lg:text-xs ml-2">The Project About To Finish</h1>

           </div>

           <TfiLayoutLineSolid className="bg-blue-600 w-px ml-5.25 lg:ml-5.75 lg:w-0.5"/>
            <div className="flex ml-4">

             <FaCircle className="size-3 lg:size-4 -mr-4 lg:-mr-5 mt-0.5 text-blue-200"/>
             <FaRegCircle className="size-5 lg:size-6 -mt-0.5 text-blue-600"/>
 
             <h1 className="text-[10px] lg:text-xs ml-2">Test The Project</h1>

           </div>

           <TfiLayoutLineSolid className="bg-blue-600 w-px ml-5.25 lg:ml-5.75 lg:w-0.5"/>
            <div className="flex ml-3">

             <FaRegCircle className="size-5 lg:size-6 -mt-0.5 text-blue-600"/>
 
             <h1 className="text-[10px] lg:text-xs ml-2">Finish The Project & Get Money</h1>

           </div>
           <div className="grid place-items-end">
           <img src="/imgs/project.png" className="size-30 opacity-15"/>
           </div>


        </div>
    )
}