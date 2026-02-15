import CoursesArr from "./Courses.json"
import { FaRegUser } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";

export default function CradCourses() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {CoursesArr.map(course => (
        <div className="bg-white" key={course.id}>
          <div className="flex flex-col">
            <img src={course.Bg} className="rounded-t-md w-full" />
            <img src={course.Avatar} className="rounded-4xl size-12 border-2 border-white absolute m-3" />
            <h1 className="text-sm font-semibold p-4">{course.Header}</h1>
            <p className="text-[10px] font-semibold px-4 text-gray-400 ">{course.Text}</p>
            <div className="flex justify-center my-3">
              <button className="bg-blue-600 hover:bg-blue-400 rounded-sm text-white text-[10px] px-2 py-1">Course Info</button>
            </div>
            <hr className="text-gray-300" />
            <div className="flex justify-between">
              <div className="flex m-3">
                <FaRegUser className="size-3 text-gray-400 hover:text-gray-600" />
                <p className="text-[10px] text-gray-400 ml-0.5">{course.UsersNum}</p>
              </div>
              <div className="flex m-3">
                <FaDollarSign className="size-3 mt-0.5 text-gray-400 hover:text-gray-600" />
                <p className="text-[10px] text-gray-400 ">{course.DollarsNum}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
