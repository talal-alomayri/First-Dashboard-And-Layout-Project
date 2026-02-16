import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

export default function NavbarTop(){
    return(
    
      <nav className="bg-white px-4 pt-3 pb-2 fixed flex justify-between w-full z-1">
        {/* nav bar part ^ */}
    
       <div className=" flex items-center gap-x-5 ml-35">
         <span className="absolute flex items-center pl-1 ">
           <button className="pl-1 pb-1 focus:outline-none "><IoIosSearch className="text-sm text-gray-500 "/></button></span>
           <input type="text" className=" w-35 pl-7 pb-1 rounded-lg border-gray-400 border shadow outline-none 
           placeholder:text-xs mb-1"
           placeholder="Type A Keyword"/>
         {/* the search part ^ */}
       </div>

       <div className="flex justify-between gap-2"><button><FaRegBell className="w-3 h-6 -mt-2 hover:text-gray-400 cursor-pointer"/></button>
       <FaCircle className="text-red-500 size-1.75 -ml-3 mt-0.5 "/>
       <div className=" relative "><button><img src="/imgs/avatar.png" 
       className="w-6 h-6 cursor-pointer"/></button>
       </div>
       {/* the bell part with the circle and avatar part ^ */}
       </div>

       
    
        </nav>
    )
}