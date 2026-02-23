
import Crads from '../Components/CardHome'


export default function HomePage(){
    return(
        <div className="">
             {/* Calling The Layout Function */}
             <div className="bg-gray-200/40 mb-4 h-screen pt-14">
            <h1 className="font-semibold text-xl ml-3 pt-4">Dashboard</h1>
            <hr className="size-8 ml-3"></hr>
            <Crads/> {/* Calling The Cards Home(Dashboard) Function */}
            </div>
              {/* The Other Pages Will Be The same like this 
              but diff Card of each page */}
            
        </div>
    )
}