import NavbarLeft from "./NavbarLeft"
import NavTopW from "./NavTopW"



export default function Thelayout(){

    return (
       <div className="flex">
        {/* Calling the Navbard and NavTopW */}
         <NavbarLeft/>
         <NavTopW/>
        </div>
       
    )
}