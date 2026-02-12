import { GrDocumentPdf } from "react-icons/gr";
import { FaRegImages } from "react-icons/fa";
import { FaRegFileWord } from "react-icons/fa6";
import { FaFileCsv } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";


export default function FileStatisticsCard(){
    return(
                 <div className="bg-white rounded-md relative shadow-2xl py-3 mt-3 md:mt-0">
            <h1 className="font-semibold ml-4 text-lg">Files Statistics</h1>

            <div className="border border-gray-200 hover:bg-gray-200 rounded flex py-2 mx-4 mt-2">
                <GrDocumentPdf className="ml-3 bg-blue-200 text-blue-500 p-2 size-7"/>
                 <div className="flex text-[10px] justify-between">
                   <div className=" mx-1 pr-9">
                    <h1>PDF Files</h1>
                    <p className="text-gray-500">130</p>
                   </div>
                    <p className="mx-2 mt-2 text-gray-500">6.5GB</p>
                 </div>
            </div>

            <div className="border border-gray-200 hover:bg-gray-200  rounded flex py-2 mx-4 mt-2">
                <FaRegImages className="ml-3 bg-green-200 text-green-500 p-2 size-7"/>
                 <div className="flex text-[10px] justify-between">
                   <div className=" mx-1 pr-9">
                    <h1>Images</h1>
                    <p className="text-gray-500">115 Files</p>
                   </div>
                    <p className="mx-2 mt-2 text-gray-500">3.5GB</p>
                 </div>
            </div>

            <div className="border border-gray-200 hover:bg-gray-200  rounded flex py-2 mx-4 mt-2">
                <FaRegFileWord className="ml-3 bg-red-200 text-red-500 p-2 size-7"/>
                 <div className="flex text-[10px] justify-between">
                   <div className=" mx-1 pr-9">
                    <h1>Word Files</h1>
                    <p className="text-gray-500">110 Files</p>
                   </div>
                    <p className="mx-2 mt-2 text-gray-500">3.2GB</p>
                 </div>
            </div>

            <div className="border border-gray-200 hover:bg-gray-200  rounded flex py-2 mx-4 mt-2">
                <FaFileCsv className="ml-3 bg-amber-200/80 text-amber-500 p-2 size-7"/>
                 <div className="flex text-[10px] justify-between">
                   <div className=" mx-1 pr-9">
                    <h1>CSV Files</h1>
                    <p className="text-gray-500">99 Files</p>
                   </div>
                    <p className="mx-2 mt-2 text-gray-500">2.9GB</p>
                 </div>
            </div>

            <div className="flex justify-center mt-2">
             <button className="flex bg-blue-500 hover:bg-blue-400 text-white px-2 py-1 rounded text-[10px]"><FaAngleDoubleUp className="mt-0.5 mr-1"/> Upload</button>
            </div>
          
        </div>
    )
}