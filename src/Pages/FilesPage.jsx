
import CardFiles from '../Components/CardFiles'
import FileStatisticsCard from "../CardFilesPage/FilesStatisticsCard"

export default function FilesPage(){
    return(
        <div className="">
            
            <div className="ml-18 md:ml-45 bg-gray-200/40 mb-4 h-screen">
            <h1 className="font-semibold text-xl ml-3 pt-4">Files</h1>
            <hr className="size-8 ml-3"></hr>
             <div className='flex gap-3'>
                <div className='flex-1'>
                 <CardFiles/>
                </div>

                <div className=''>
                 <FileStatisticsCard/>
                </div>
             </div>
            </div>
        </div>
    )
}