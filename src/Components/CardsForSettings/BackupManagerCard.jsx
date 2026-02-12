import { FaServer } from "react-icons/fa6";


export default function WidgetsControlCard(){
    return(
        <div className="bg-white rounded-md shadow-2xl pb-3">
            <h1 className="ml-3 mt-3 font-semibold">Bakup Manager</h1>
            <p className="text-[10px] md:text-xs ml-3 mt-1 font-semibold text-gray-400">Control Backup Time And Location</p>

            <ul className="ml-5 mt-2">
                <li className="flex my-3">
                    <input type="radio" id="Quick" name="radio" className="size-4 cursor-pointer"/>
                     <label for="radio" className="text-sm ml-2 -mt-0.5"> Quick Draft</label>
                </li>
                <li className="flex my-3">
                    <input type="radio" id="Yearly" name="radio" className="size-4 cursor-pointer"/>
                     <label for="radio" className="text-sm ml-2 -mt-0.5"> Yearly Tragets</label>
                </li>
                <li className="flex my-3 ">
                    <input type="radio"id="Tickets" name="radio" className="size-4 cursor-pointer"/>
                     <label for="radio" className="text-sm ml-2 -mt-0.5 "> Tickets Statistics</label>
                </li>
            </ul>

            <hr className="text-gray-200 mx-4 mb-3"></hr>

           <div className="px-3">
            <div className="grid grid-cols-3 gap-3">

                 <label for="server1" className="cursor-pointer">
                     <input type="radio" name="server" id="server1" className="peer hidden"/>
                      <div  className=" border rounded-md border-gray-300 peer-checked:border-blue-600 peer-checked:text-blue-600 p-5 lg:px-12 ">
                        <div className="flex justify-center">
                       <FaServer className=""/>
                       </div>
                       <div className="flex justify-center">
                       <p className="text-xs font-semibold">Megaman</p>
                       </div>
                    </div>
                 </label>
        
                 <label for="server2"  className="cursor-pointer">
                    <input type="radio" name="server" id="server2" className="peer hidden"/>
                     <div  className=" border  rounded-md border-gray-300 peer-checked:border-blue-600 peer-checked:text-blue-600 p-5 lg:px-12">
                    <div className="flex justify-center">
                    <FaServer className=""/>
                    </div>
                    <div className="flex justify-center">
                    <p className="text-xs font-semibold">Zero</p>
                    </div>
                    </div>
                 </label>
               
                 <label for="server3"  className="cursor-pointer">
                    <input type="radio" name="server" id="server3" className="peer hidden"/>
                    <div  className=" border  rounded-md border-gray-300 peer-checked:border-blue-600 peer-checked:text-blue-600 p-5 lg:px-12">
                    <div className="flex justify-center">
                    <FaServer className=""/>
                    </div>
                    <div className="flex justify-center">
                    <p className="text-xs font-semibold">Sigma</p>
                    </div>
                    </div>
                 </label>
            </div>
           </div>

        </div>
    )
}