import NavbarLeft from "./NavbarLeft"
import NavTopW from "./NavTopW"
import {useState} from "react";
import { AiOutlineBars } from "react-icons/ai";


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
      <div className="flex-1 fixed bg-white z-1 rounded-md p-1">
         <button onClick={toggleSidebar}>
            <AiOutlineBars className="size-6"/>        
         </button>
     </div>
        {/* Calling the Navbard and NavTopW */}
         <NavTopW/>
         
        </div>
       
    )
}