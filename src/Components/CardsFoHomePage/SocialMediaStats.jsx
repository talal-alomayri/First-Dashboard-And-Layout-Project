import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export default function SocialMediaStats(){
    return(
        <div className="bg-white rounded-md shadow-2xl">

            <h1 className="ml-3 mt-3 mb-4 font-semibold">Social Media Stats</h1>

            <div>
               <div className="flex mx-3 mb-1"> 
                <FaTwitter className="size-9 text-white bg-sky-500 p-1"/>
                 <div className="flex justify-between w-full bg-sky-200 ">
                  <h1 className="mx-2 text-xs mt-2 text-sky-500">90K Followers</h1>
                  <button className=" text-[9px] bg-sky-500 hover:bg-sky-600 mx-1 my-2 px-1 rounded-md text-white cursor-pointer">Follow</button>
                 </div>
               </div> 
               <div className="flex mx-3 mb-2"> 
                <FaFacebookF className="size-9 text-white bg-blue-500 p-1"/>
                 <div className="flex justify-between w-full bg-blue-200 ">
                  <h1 className="ml-2 text-xs mt-2 text-blue-500">2M Like</h1>
                  <button className="text-[9px] bg-blue-500 hover:bg-blue-800 mr-2 my-2 px-1.5 rounded-md text-white cursor-pointer">Like</button>
                 </div>
               </div> 
              <div className="flex mx-3 mb-2 "> 
                <FaYoutube className="size-9 text-white bg-red-500 p-1"/>
                 <div className="flex justify-between w-full bg-red-200 ">
                  <h1 className="ml-2 text-xs mt-2 text-red-500">1M Subs</h1>
                  <button className="text-[9px] bg-red-500 hover:bg-red-700 mr-2 my-2 px-1 rounded-md text-white cursor-pointer">Subscribe</button>
                 </div>
               </div> 
               <div className="flex mx-3 mb-2"> 
                <FaLinkedinIn className="size-9 text-white bg-cyan-600 p-1"/>
                 <div className="flex justify-between w-full bg-cyan-600/50 ">
                  <h1 className="ml-2 text-xs mt-2 text-cyan-600">70K Followers</h1>
                  <button className="text-[9px] bg-cyan-600 hover:bg-cyan-800 mr-2 my-2 px-1 rounded-md text-white cursor-pointer">Follow</button>
                 </div>
               </div> 
            </div>

        </div>
    )
}