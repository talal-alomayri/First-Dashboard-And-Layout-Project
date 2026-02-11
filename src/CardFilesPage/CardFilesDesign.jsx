import { FaDownload } from "react-icons/fa6";


export default function CardFiles({FileImg, FileName, FileDesc, FileDate, FileSize}){
    return(
         <div className="bg-white rounded-md shadow-2xl relative hover:bg-gray-100">
            <FaDownload className="text-gray-500 m-3"/>

            <div className="flex justify-center">
               <img src={FileImg} className="size-14 -mt-4"/> 
            </div>

            <h1 className="text-center text-sm my-4">{FileName}</h1>


            <h1 className="text-xs text-gray-400 font-semibold my-4 ml-3">{FileDesc}</h1>

            <hr className="text-gray-300 mx-3 my-3"></hr>

            <div className="flex justify-between mx-3 my-3 font-semibold text-xs text-gray-400">
              <p>{FileDate}</p>
              <p>{FileSize}</p>
            </div>

            

            
        </div>
    )
}