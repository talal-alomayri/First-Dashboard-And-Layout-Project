
import CardProjects from "../Components/CardProjects"


export default function ProjectsPage(){

    return(
        <div className="">
        
           <div className=" bg-gray-200/40 pb-4 h-full">
            <h1 className="font-semibold text-xl ml-3 pt-4">Projects</h1>
            <hr className="size-8 ml-3"></hr>
            <CardProjects/>
            </div>
        </div>
    )
}