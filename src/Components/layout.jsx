import NavbarLeft from "./NavbarLeft"
import NavTopW from "./NavTopW"
import { useState} from "react";
import { HiOutlineBars3 } from "react-icons/hi2";


export default function Thelayout(){
     const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  function toggleSidebar(){
    if (isSidebarOpen === true){
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }

    return (
       <div className="">
        <NavbarLeft isOpen={isSidebarOpen}/>
      <div className="flex-1 fixed bg-white z-2 rounded-md pt-3 pl-3">
         <button onClick={toggleSidebar}>
            <HiOutlineBars3 className="size-6 cursor-pointer"/>        
         </button>
     </div>
        {/* Calling the Navbard and NavTopW */}
         <NavTopW/>
         
        </div>
       
    )
}