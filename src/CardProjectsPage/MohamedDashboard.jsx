






export default function AhmedDashboard(){
    return(
          <div className="bg-white rounded-md shadow-2xl">

           <div className="flex justify-between">
            <h1 className="ml-3 mt-3 text-[10px]">Mohamed Dashboard</h1>
            <p className="text-[8px] font-semibold text-gray-400 p-1">15/6/2022</p>
           </div>
            <p className="text-[8px] mb-3 ml-3 mt-1 font-semibold text-gray-400">Mohamed Dashboard Project Design And Programming And Hosting</p>
            
            <div className="flex ml-3">
            <img src="./imgs/team-01.png" className=" rounded-4xl border-white border-2 md:size-6 size-5"/>
                 <img src="./imgs/team-02.png" className=" rounded-4xl border-white border-2  md:size-6 size-5 -ml-2"/>
                 <img src="./imgs/team-03.png" className=" rounded-4xl border-white border-2  md:size-6 size-5 -ml-2"/>
                 <img src="./imgs/team-04.png" className=" rounded-4xl border-white border-2  md:size-6 size-5 -ml-2"/>
            </div>

            <hr className="text-gray-300 mx-3 my-3"></hr>

            
              <div className="flex mx-3 justify-end">
                <h1 className="bg-gray-200 text-[8px] lg:text-[10px] rounded-sm px-1 ml-0.5 ">Programming</h1>
                <h1 className="bg-gray-200 text-[8px] lg:text-[10px] rounded-sm px-1 ml-0.5">Design</h1>
                <h1 className="bg-gray-200 text-[8px] lg:text-[10px] rounded-sm px-1 ml-0.5 ">Hosting</h1>
                <h1 className="bg-gray-200 text-[8px] lg:text-[10px] rounded-sm px-1 ml-0.5 ">Marketing</h1>
              </div>


             <hr className="text-gray-300 mx-3 my-3"></hr>

             <div className="flex justify-between mx-3 mb-2">
                 <div className="flex py-1 ">
                   <div className="bg-green-500 w-13 h-full text-[2px] rounded-2xl">-</div>
                    <div className="bg-gray-300 w-5 h-full text-[2px] rounded-r-2xl text-red-600 "></div>
                   </div>

                <p className="text-[8px] text-gray-400 font-semibold">$ 1950</p>
             </div>
        </div>
    )
}