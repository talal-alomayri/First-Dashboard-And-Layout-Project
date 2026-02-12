import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

export default function SocialInfoCard(){
    return(
        <div className="bg-white rounded-md shadow-2xl">
            <h1 className="ml-3 mt-3 font-semibold">Social Info</h1>
            <p className="text-[10px] md:text-xs ml-3 mt-1 font-semibold text-gray-400">Social Media Information</p>

            <div className="flex bg-gray-100 mx-3 my-3 border border-stone-300 rounded">
              <TiSocialTwitter className="text-stone-400 size-5 lg:size-6 mt-1.5 mx-1"/>
              <h1 className="text-xs pl-1 text-stone-400 border-l py-2 ">Twitter Username</h1>
            </div>         
            <div className="flex bg-gray-100 mx-3 my-3 border border-stone-300 rounded">
              <TiSocialFacebook className="text-stone-400 size-5 lg:size-6 mt-1.5 mx-1"/>
              <h1 className="text-xs pl-1 text-stone-400 border-l py-2 ">Facebook Username</h1>
            </div>         
            <div className="flex bg-gray-100 mx-3 my-3 border border-stone-300 rounded">
              <RiLinkedinBoxFill className="text-stone-400 size-5 lg:size-6 mt-1.5 mx-1"/>
              <h1 className="text-xs pl-1 text-stone-400 border-l py-2 ">Linkedin Username</h1>
            </div>         
            <div className="flex bg-gray-100 mx-3 my-3 border border-stone-300 rounded">
              <FaYoutube className="text-stone-400 size-5 lg:size-6 mt-1.5 mx-1"/>
              <h1 className="text-xs pl-1 text-stone-400 border-l py-2 ">Youtube Username</h1>
            </div>  
            
                   

        </div>
    )
}