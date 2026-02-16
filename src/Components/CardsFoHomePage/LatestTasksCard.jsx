import { FaRegTrashCan } from "react-icons/fa6";



export default function LatestNewsCrad(){
    return(
        <div className="bg-white rounded-md shadow-2xl"> 
          
              <h1 className="ml-3 mt-3 mb-1 font-semibold">Latest Tasks</h1>
            
                  <div className="flex justify-between hover:bg-gray-100 hover:mx-0.5 cursor-pointer">
                    <div className="lg:mt-2">
                    <h1 className="font-bold text-[10px] lg:text-xs mt-1 ml-2">Record One New Video</h1>
                    <p className="text-[8px] lg:text-[10px] text-gray-800/50 font-semibold mt-1 ml-2 lg:mr-1">Record Python Create Exe Project</p>
                    </div>
                    <div className="mt-3 mr-3 lg:mt-4 mb-4">
                    <FaRegTrashCan className="size-3 hover:text-gray-400"/>
                    </div>
                  </div>
                  

                  <hr className="text-gray-200 mx-3"></hr>
     
                  <div className="flex justify-between hover:bg-gray-100 hover:mx-0.5 cursor-pointer">
                    <div className="lg:mt-2">
                    <h1 className="font-bold text-[10px] lg:text-xs mt-1 ml-2">Write Article</h1>
                    <p className="text-[8px] lg:text-[10px] text-gray-800/50 font-semibold mt-1 ml-2 lg:mr-1">Write Low Level vs High Level Languages</p>
                    </div>
                    <div className="mt-3 mr-3 lg:mt-4 mb-4">
                    <FaRegTrashCan className="size-3  hover:text-gray-400"/>
                    </div>
                  </div>

                  <hr className="text-gray-200 mx-3"></hr>
                  
                  <div className="flex justify-between hover:bg-gray-100 hover:mx-0.5 cursor-pointer">
                    <div className="lg:mt-2">
                    <h1 className="font-bold text-[10px] lg:text-xs mt-1 ml-2">Finish Project</h1>
                    <p className="text-[8px] lg:text-[10px] text-gray-800/50 font-semibold mt-1 ml-2 lg:mr-1">Publish Academy Programming Project</p>
                    </div>
                    <div className="mt-3 mr-3 lg:mt-4 mb-4">
                    <FaRegTrashCan className="size-3  hover:text-gray-400"/>
                    </div>
                  </div>

                   <hr className="text-gray-200 mx-3"></hr>
                  
                  <div className="flex justify-between">
                    <div className="lg:mt-2 line-through">
                    <h1 className="font-bold text-[10px] lg:text-xs text-gray-800/40 mt-1 ml-2">Attend The Meeting</h1>
                    <p className="text-[7px] lg:text-[10px] text-gray-800/30 font-semibold mt-1 ml-2 lg:mr-1">Attend The Project Business Analysis Meeting</p>
                    </div>
                    <div className="mt-3 mr-3 lg:mt-4 mb-4">
                    <FaRegTrashCan className="text-gray-800/30 size-3"/>
                    </div>
                  </div>

                   <hr className="text-gray-200 mx-3"></hr>
                  
                  <div className="flex justify-between hover:bg-gray-100 hover:mx-0.5 cursor-pointer">
                    <div className="lg:mt-2">
                    <h1 className="font-bold text-[10px] lg:text-xs mt-1 ml-2">Finish Lesson</h1>
                    <p className="text-[7px] lg:text-[10px] text-gray-800/50 font-semibold mt-1 ml-2 lg:mr-1">Finish Teaching Flex Box</p>
                    </div>
                    <div className="mt-3 mr-3 lg:mt-4 ">
                    <FaRegTrashCan className=" size-3  hover:text-gray-400"/>
                    </div>
                  </div>
                  

        </div>
    )
}