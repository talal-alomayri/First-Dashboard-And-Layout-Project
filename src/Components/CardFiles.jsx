import { FaDownload } from "react-icons/fa6";
import FilesArr from "./Files.json"

export default function CardFiles(){
    return(
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {FilesArr.map(File => (
            <div className="bg-white rounded-md shadow-2xl relative hover:bg-gray-100 ">
              <FaDownload className="text-gray-500 m-3"/>

              <div className="flex justify-center">
                 <img src={File.FileImag} className="size-14 -mt-4"/> 
              </div>

              <h1 className="text-center text-sm my-4">{File.FileName}</h1>


              <h1 className="text-xs text-gray-400 font-semibold my-4 ml-3">{File.FileDesc}</h1>

              <hr className="text-gray-300 mx-3 my-3"></hr>

              <div className="flex justify-between mx-3 my-3 font-semibold text-xs text-gray-400">
                <p>{File.FileDate}</p>
                <p>{File.FileSize}</p>
              </div>
            </div>
        ))}

      </div>
    )
}