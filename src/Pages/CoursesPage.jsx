
import CradCourses from '../Components/CardCourses'

export default function CoursesPage(){
    return(
        <div className="">
            
             <div className="ml-18 md:ml-45 bg-gray-200/40 mb-4 h-screen">
            <h1 className="font-semibold text-xl ml-3 pt-4">Courses</h1>
            <hr className="size-8 ml-3"></hr>
            <CradCourses/>
            </div>
              

            
        </div>
    )
}