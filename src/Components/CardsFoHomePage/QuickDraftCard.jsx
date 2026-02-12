

export default function QuickDraftCrad(){
    return(
        <div className="bg-white rounded-md shadow-2xl"> 
          
              <h1 className="ml-3 mt-3 font-semibold">Quick Draft</h1>
              <p className="ml-3 text-xs text-gray-800/50 font-semibold">Write A Draft For Your Ideas</p>
              <div className="">

               <div className="px-3">
              <input type="text" className="bg-stone-200 rounded-sm w-full  placeholder:text-[10px]
               placeholder:pl-1 pb-1 font-semibold text-gray-800/70"
              placeholder="Title"/>
              </div> 
             
              <div className="px-3">
              <input type="text" className="mt-4 pb-20 bg-stone-200 rounded-sm w-full placeholder:text-[10px] 
               placeholder:pl-1 font-semibold text-gray-800/70"
              placeholder="Your Thought"/>
              </div>

               </div>
              

              
        <div className="flex justify-end pt-3 pb-3 pr-3 ">
          <button className="bg-blue-600 hover:bg-blue-400 text-white rounded-sm text-[10px] font-semibold
           py-0.5 px-2 ">Save</button>
        </div>
       

        </div>
    )
}