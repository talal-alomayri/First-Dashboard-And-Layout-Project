

export default function ProjectCard(){
    return(
        <div className="bg-white rounded-md mx-3 shadow-2xl overflow-auto">

          <h1 className="ml-3 mt-3 mb-4 font-semibold">Projects</h1>

 
         <div className="mx-3">
          <table className="text-xs w-full">
           <thead className="bg-stone-200">
            <tr className="text-left">
              <th className="px-6 py-1 lg:p-3 md:text-xs text-[10px] font-semibold tracking-wide">Name</th>
              <th className="px-6 py-1 lg:p-3 md:text-xs text-[10px] font-semibold tracking-wide">Finish Date</th>
              <th className="px-6 py-1 lg:p-3 md:text-xs text-[10px] font-semibold tracking-wide">Client</th>
              <th className="px-6 py-1 lg:p-3 md:text-xs text-[10px] font-semibold tracking-wide">Price</th>
              <th className="px-6 py-1 lg:p-3 md:text-xs text-[10px] font-semibold tracking-wide">Team</th>
              <th className="px-6 py-1 lg:p-3 md:text-xs text-[10px] font-semibold tracking-wide">Status</th>
            </tr>
           </thead>
           <tbody>
            <tr className="border border-gray-200 ">
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">Ministry Wikipedia</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">10 May 2022</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">Ministry</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">$5300</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold flex -space-x-3"><img src="./imgs/team-01.png" className=" rounded-4xl border-white border-2 md:size-6 size-5"/>
                 <img src="./imgs/team-02.png" className=" rounded-4xl border-white border-2  md:size-6 size-5"/>
                 <img src="./imgs/team-03.png" className=" rounded-4xl border-white border-2  md:size-6 size-5"/>
                 <img src="./imgs/team-05.png" className=" rounded-4xl border-white border-2  md:size-6 size-5"/></td>
              <td className="p-3 "><button className=" bg-amber-500 md:text-[10px] text-[6px] text-white rounded-sm py-1 px-2">Pending</button></td>
            </tr>
            <tr className="border border-gray-200 ">
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">Elzero Shop</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">12 Oct 2021</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">Elzero Company</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">$1500</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] text-gray-400 flex -space-x-3"><img src="./imgs/team-01.png" className=" rounded-4xl border-white border-2  md:size-6 size-5"/>
                 <img src="./imgs/team-02.png" className=" rounded-4xl border-white border-2  md:size-6 size-5 "/>
                 <img src="./imgs/team-05.png" className=" rounded-4xl border-white border-2  md:size-6 size-5 "/></td>
              <td className="p-3 "><button className=" bg-blue-600 md:text-[10px] text-[6px] text-white rounded-sm py-1 px-2">In Progress</button></td>
            </tr>
            <tr className="border border-gray-200 ">
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">Bouba App</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">05 Sep 2021</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">Bouba</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">$800</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] text-gray-400 flex -space-x-3">
                 <img src="./imgs/team-02.png" className=" rounded-4xl border-white border-2  md:size-6 size-5 "/>
                 <img src="./imgs/team-03.png" className=" rounded-4xl border-white border-2  md:size-6 size-5 "/></td>
              <td className="p-3 "><button className=" bg-green-500 md:text-[10px] text-[6px] text-white rounded-sm py-1 px-2">Completed</button></td>
            </tr>
            <tr className="border border-gray-200 ">
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">Mahmound Website</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">22 May 2021</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">Mahmoud</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">$600</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] text-gray-400 flex -space-x-3"><img src="./imgs/team-01.png" className=" rounded-4xl border-white border-2  md:size-6 size-5"/>
                 <img src="./imgs/team-02.png" className=" rounded-4xl border-white border-2  md:size-6 size-5 "/></td>
              <td className="p-3 "><button className=" bg-green-500 md:text-[10px] text-[6px] text-white rounded-sm py-1 px-2">Completed</button></td>
            </tr>
            <tr className="border border-gray-200 ">
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">Sayed Website</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">24 May 2021</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">Sayed</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">$300</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] text-gray-400 flex -space-x-3"><img src="./imgs/team-01.png" className=" rounded-4xl border-white border-2  md:size-6 size-5"/>
                 <img src="./imgs/team-03.png" className=" rounded-4xl border-white border-2  md:size-6 size-5 "/></td>
              <td className="p-3 "><button className=" bg-red-500 md:text-[10px] text-[6px] text-white rounded-sm py-1 px-2">Rejected</button></td>
            </tr>
            <tr className="border border-gray-200 ">
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">Arena Application</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">01 Mar 2021</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">Arena Company</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] font-semibold">$2600</td>
              <td className="border-r border-gray-200 p-3 md:text-[10px] text-[8px] text-gray-400 flex -space-x-3"><img src="./imgs/team-01.png" className=" rounded-4xl border-white border-2  md:size-6 size-5"/>
                 <img src="./imgs/team-02.png" className=" rounded-4xl border-white border-2  md:size-6 size-5"/>
                 <img src="./imgs/team-03.png" className=" rounded-4xl border-white border-2  md:size-6 size-5"/>
                 <img src="./imgs/team-04.png" className=" rounded-4xl border-white border-2  md:size-6 size-5"/></td>
              <td className="p-3 "><button className=" bg-green-500 md:text-[10px] text-[6px] text-white rounded-sm py-1 px-2">Completed</button></td>
            </tr>
           </tbody>



          </table>
        </div>
      

        </div>
    )
}