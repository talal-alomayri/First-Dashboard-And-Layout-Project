
import CardFiles from '../Components/CardFiles'
import FileStatisticsCard from "../Components/CardFilesPage/FilesStatisticsCard"

export default function FilesPage(){
    return(
        <div className="">
            
            <div className=" bg-gray-200/40 pb-3 h-full">
            <div>
            <h1 className="font-semibold text-xl ml-3 pt-4">Files</h1>
            <hr className="size-8 ml-3"></hr>
             <div className='mx-3 md:flex gap-3'>
                <div className='flex-1'>
                 <CardFiles/>
                </div>

                <div className=''>
                 <FileStatisticsCard/>
                </div>
             </div>
            </div>
            </div>
        </div>
    )
}