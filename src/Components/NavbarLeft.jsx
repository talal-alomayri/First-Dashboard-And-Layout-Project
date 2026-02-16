import { Link } from 'react-router-dom'
import { VscGraph } from "react-icons/vsc";
import { IoMdSettings } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { FaDiagramProject } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaRegFile } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
import { RxSlider } from "react-icons/rx";


export default function NavbarLeft({isOpen}){
    return(
        <div className={`bg-white fixed z-1 w-fit flex h-full shadow-2xl/20 transition-transform
         duration-300 ${isOpen ? "-translate-x-45" : null} `}>
          {/* here the navbar on Left I'm sure you can understand it :) */}
          <div>
           <h1 className="text-lg text-center mt-8">Elzero</h1>
           <div className='flex justify-center'>
           <RxSlider className=" w-7 h-15 pb-4"/>
           </div>
           
           {/* here the Unordered list with the Icons and link to move from page to another */}
           <ul className="mx-3 md:mt-2 text-xs">
             <li className="pl-2 pr-10 pt-2 pb-2 rounded-sm text hover:bg-gray-100">
                 <Link to="/">
                    <div className="flex">
                    <VscGraph className="inline-block h-4 w-4 mr-2 "/>
                    <p className=" inline-block">Dashborad</p>
                    </div>
                  </Link>
             </li>
              <li className="pl-2 pt-2 pb-2 rounded-sm hover:bg-gray-100">
                 <Link to="/SettingsPage">
                    <div className="flex">
                    <IoMdSettings className="inline-block h-4 w-4 mr-2  "/>
                    <p className="inline-block">Settigns</p>
                    </div>
                 </Link>
             </li>
              <li className="pl-2 pt-2 pb-2 rounded-sm hover:bg-gray-100">
                <Link to="/ProfilePage">
                     <div className="flex">
                    <FaRegUser className="inline-block h-4 w-4 mr-2  "/>
                    <p className="inline-block">Profile</p>
                    </div>
                </Link>
             </li>
              <li className="pl-2 pt-2 pb-2 rounded-sm hover:bg-gray-100">
                <Link to="/ProjectsPage">
                   <div className="flex">
                    <FaDiagramProject className="inline-block h-4 w-4 mr-2  "/>
                    <p className="inline-block">Projects</p>
                    </div>
                </Link>
             </li>
              <li className="pl-2 pt-2 pb-2 rounded-sm hover:bg-gray-100">
                <Link to="/CoursesPage">
                    <div className="flex">
                    <FaGraduationCap className="inline-block h-4 w-4 mr-2  "/>
                    <p className="inline-block">Courses</p>
                    </div>
                </Link>
             </li>
              <li className="pl-2 pt-2 pb-2 rounded-sm hover:bg-gray-100">
                <Link to="/FriendsPage">
                   <div className="flex">
                    <CgProfile className="inline-block h-4 w-4 mr-2  "/>
                    <p className="inline-block">Frineds</p>
                    </div>
                </Link>
             </li>
              <li className="pl-2 pt-2 pb-2 rounded-sm hover:bg-gray-100">
                <Link to="/FilesPage">
                     <div className="flex">
                    <FaRegFile className="inline-block h-4 w-4 mr-2  "/>
                    <p className="inline-block">File</p>
                    </div>
                </Link>
             </li>
               <li className="pl-2 pt-2 pb-2 rounded-sm hover:bg-gray-100">
                <Link to="/PlansPage">
                   <div className="flex">
                    <FaRegCreditCard className="inline-block h-4 w-4 mr-2  "/>
                    <p className="inline-block">Plans</p>
                    </div>
                </Link>
             </li>
           </ul>
          </div>  
       
        </div>
    )
}