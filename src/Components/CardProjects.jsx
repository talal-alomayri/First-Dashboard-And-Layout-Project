
import projectArr from "../Jsons/Projects.json"


export default function CardProjects(){
    return(
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-3 mr-3 pb-3">
           {projectArr.map(project =>(
             <div className="bg-white rounded-md shadow-2xl">

           <div className="flex justify-between">
            <h1 className="ml-3 mt-3 text-[10px]">{project.Name}</h1>
            <p className="text-[8px] font-semibold text-gray-400 p-1">{project.date}</p>
           </div>
            <p className="text-[8px] mb-3 ml-3 mt-1 font-semibold text-gray-400">{project.Desc}</p>
            
            <div className="flex ml-3 -space-x-2">
                {project.images.map((img,index) => (
                 <img key={index} src={img} className=" rounded-4xl border-white border-2 md:size-6 size-5"/>
                ))}
            </div>

            <hr className="text-gray-300 mx-3 my-3"></hr>

            
              <div className="flex mx-3 justify-end">
                {project.skils.map((skill,index) => (
                   <h1 key={index} className="bg-gray-200 text-[8px]  rounded-sm px-1 ml-0.5 ">{skill}</h1>
                ))}
              </div>


             <hr className="text-gray-300 mx-3 my-3"></hr>

             <div className="flex justify-between items-center mx-3 mb-2 gap-60">
                 <div className=" flex-1">
                   <div className="bg-gray-300 w-full h-1 rounded-2xl overflow-hidden">
                     <div className={`${project.bgProgressColor} h-1 rounded-r-2xl text-red-600 transition-all`}
                      style={{width: `${project.Progress}%`}}></div>
                   </div>
                  </div>

                <p className="text-[8px] text-gray-400 font-semibold">$ {project.price}</p>
             </div>
        </div>
           ))}
        </div>
    )
}