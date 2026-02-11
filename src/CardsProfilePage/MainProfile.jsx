import { FaStar } from "react-icons/fa";
import { Switch } from '@headlessui/react'



export default function MainProfile(){
    return(
        <div className="flex bg-white rounded">

            <div className="bg-white px-10 py-7 lg:pt-10 lg:px-14">
              <img src="./imgs/avatar.png" className="size-20 "/>
              <h1 className="text-[13px] font-semibold ">Talal Ibrahim</h1>
              <p className="text-[10px] lg:text-xs ml-4 text-gray-500">Level 25</p>
                 <div className="flex py-1 ">
                   <div className="bg-blue-600 w-12 h-full text-[2px]">-</div>
                    <div className="bg-gray-300 w-7 h-full text-[2px] text-blue-600 ">-</div>
                   </div>
                <div className="flex text-xs text-amber-400 ml-2">
                <FaStar className=""/>
                <FaStar className=""/>
                <FaStar className=""/>
                <FaStar className=""/>
                <FaStar className=""/>
                </div>
              <p className="text-[10px] lg:text-xs ml-3 text-gray-500">550 Reating</p>
            </div>

            <div className="text-[10px] lg:text-xs w-full border-l border-gray-300 px-2">
                <h1 className="p-2 text-gray-400">General Information</h1>
                 <div className="flex pl-2 pb-2 justify-between">
                    <div className="flex">
                    <h1 className="text-gray-400 mr-1">Full Name:</h1>
                    <p>Talal Ibrahim</p>
                    </div>

                    <div className="flex">
                    <h1 className="text-gray-400 pr-1">Gender:</h1>
                    <p>Male</p>
                    </div>

                    <div className="flex">
                    <h1 className="text-gray-400 pr-1">Country:</h1>
                    <p>Saudi Arabia</p>
                    </div>
                     <Switch className=" group relative flex lg:h-6 lg:w-18 h-4 w-9 cursor-pointer rounded-full bg-blue-500 hover:bg-blue-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-blue-500 data-focus:outline data-focus:outline-white">  
                       <span aria-hidden="true"
                       className="pointer-events-none inline-block lg:size-4 size-2 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-5 lg:group-data-checked:translate-x-12"/>
                    </Switch>  
                 </div>

                <hr className="text-gray-300"></hr>


                <h1 className="p-2 text-gray-400">Personal Information</h1>
                 <div className="flex pl-2 pb-2 justify-between">
                    <div className="flex">
                    <h1 className="text-gray-400 pr-1">Email:</h1>
                    <p>alomayritalal@gmail.com</p>
                    </div>

                    <div className="flex">
                    <h1 className="text-gray-400 pr-1">Phone:</h1>
                    <p>0544223311</p>
                    </div>

                    <div className="flex">
                    <h1 className="text-gray-400 pr-1">Date Of Birth:</h1>
                    <p>10/04/2005</p>
                    </div>
                     <Switch className=" group relative flex lg:h-6 lg:w-18 h-4 w-9 cursor-pointer rounded-full bg-blue-500 hover:bg-blue-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-blue-500 data-focus:outline data-focus:outline-white">  
                       <span aria-hidden="true"
                       className="pointer-events-none inline-block lg:size-4 size-2 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-5 lg:group-data-checked:translate-x-12"/>
                    </Switch>  
                 </div>

                <hr className="text-gray-300"></hr>
                <h1 className="p-2 text-gray-400">Job Information</h1>
                 <div className="flex pl-2 pb-2 justify-between">
                    <div className="flex">
                    <h1 className="text-gray-400 pr-1">Title:</h1>
                    <p>Front-end Developer</p>
                    </div>

                    <div className="flex">
                    <h1 className="text-gray-400 pr-1">Programming Language:</h1>
                    <p>Java Script</p>
                    </div>

                    <div className="flex">
                    <h1 className="text-gray-400 pr-1">Years Of Experience:</h1>
                    <p>2+</p>
                    </div>
                     <Switch className=" group relative flex lg:h-6 lg:w-18 h-4 w-9 cursor-pointer rounded-full bg-blue-500 hover:bg-blue-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-blue-500 data-focus:outline data-focus:outline-white">  
                       <span aria-hidden="true"
                       className="pointer-events-none inline-block lg:size-4 size-2 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-5 lg:group-data-checked:translate-x-12"/>
                    </Switch>  
                 </div>

                <hr className="text-gray-300"></hr>
                <h1 className="p-2 text-gray-400">Billing Information</h1>
                 <div className="flex pl-2 pb-2 justify-between">
                    <div className="flex">
                    <h1 className="text-gray-400 pr-1">Payment Method:</h1>
                    <p>Alrajhi</p>
                    </div>

                    <div className="flex">
                    <h1 className="text-gray-400 pr-1">Email:</h1>
                    <p>email@website.com</p>
                    </div>

                    <div className="flex">
                    <h1 className="text-gray-400 pr-1">Subscrption:</h1>
                    <p>Monthly</p>
                    </div>
                     <Switch className=" group relative flex lg:h-6 lg:w-18 h-4 w-9 cursor-pointer rounded-full bg-blue-500 hover:bg-blue-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-blue-500 data-focus:outline data-focus:outline-white">  
                       <span aria-hidden="true"
                       className="pointer-events-none inline-block lg:size-4 size-2 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-5 lg:group-data-checked:translate-x-12"/>
                    </Switch>  
                 </div>

                 

            </div>
            
        </div>
    )
}