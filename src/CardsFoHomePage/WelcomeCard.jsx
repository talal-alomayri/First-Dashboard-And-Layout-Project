import { Link } from "react-router-dom"


export default function WelcomeCrad(){
    return(
        <div className="bg-white rounded-md shadow-2xl"> {/* Welcome part */}
          <div className="flex justify-between bg-stone-200 rounded-t-md">
              <div>
              <h1 className="ml-3 mt-3 font-semibold">Welcome</h1>
              <p className="ml-3 text-xs text-gray-800/50 font-semibold">Elzero</p>
              </div>
              <img src="/imgs/welcome.png" className="w-32 h-17 mt-4 mr-3 mb-2"/>
            </div>

           {/* down part */}
        <img src="/imgs/avatar.png" className="w-7 h-7 -mt-4 ml-3"/>
          <hr className="text-gray-300/50 mt-4"></hr>
           <div className="mx-8 py-3">
             <div className="flex justify-between text-[12px] font-semibold">
              <h1 className="text-center">Osama Elzero</h1>
              <h1 className="text-center">80</h1>
              <h1 className="text-center">$8500</h1>
             </div> 
             <div className="flex justify-between text-[10px] text-gray-800/50 font-semibold">
              <p className="text-center ml-3">Developer</p>
              <p className="text-center ml-3">Projects</p>
              <p className="text-center">Earned</p>
             </div> 
           </div>
         <hr className="text-gray-300/50 "></hr>

        <div className="flex justify-end pt-3 pb-11 pr-3">
          <Link to="/ProfilePage">
          <button className="bg-blue-600 text-white rounded-sm text-[10px] font-semibold
           hover:bg-blue-400 py-0.5 px-2 ">Profile</button>
          </Link> 
        </div>
       

        </div>
    )
}