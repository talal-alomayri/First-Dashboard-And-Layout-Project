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


export default function NavbarLeft(){
    return(
        <div className="bg-white fixed z-1 w-45 h-full shadow-2xl/20">
          {/* here the navbar on Left I'm sure you can understand it :) */}
          <div>
           <h1 className="md:text-lg text-center mt-5">Elzero</h1>
           <RxSlider className="md:w-10 w-5 h-16 md ml-6 md:ml-17 pb-8"/>
           
           {/* here the Unordered list with the Icons and link to move from page to another */}
           <ul className=" md:ml-5 mr-2 md:mt-2 text-xs">
             <li className="pl-2 pt-2 pb-2 rounded-sm text hover:bg-gray-100">
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