

export default function LatestNewsCrad(){
    return(
        <div className="bg-white rounded-md shadow-2xl overflow-auto"> 
          
              <h1 className="ml-3 mt-3 mb-1 font-semibold">Latest News</h1>
            
                  <button className="flex justify-between w-full">
                    <img src="/imgs/news-01.png" className="h-10 w-20 lg:h-13 lg:w-26 rounded-md ml-3"/>
                   <div className="flex hover:bg-gray-200 justify-between w-full mr-3">
                    <div className="lg:mt-2 w-full">
                    <h1 className="font-bold text-[10px] lg:text-xs mt-1 ml-2">Created SASS Section</h1>
                    <p className="text-[8px] lg:text-[10px] text-gray-800/50 font-semibold mt-1 ml-2 lg:mr-1">New SASS Examples & Tutorials</p>
                    </div>
                    <div className="mt-4 ml-2 lg:ml-18">
                    <p className="text-[8px] lg:text-[10px] bg-gray-200 rounded-sm px-1 ">3 Days Ago</p>
                    </div>
                   </div>  
                  </button>

                  <hr className="text-gray-200 mx-3 my-2"></hr>
     
                  <button className="flex w-full">
                    <img src="/imgs/news-02.png" className="h-10 w-20  lg:h-13 lg:w-26 rounded-md ml-3"/>
                   <div className="flex justify-between w-full mr-3 hover:bg-gray-200">
                    <div className="lg:mt-2">
                    <h1 className="font-bold text-[10px] lg:text-xs mt-1 ml-2">Changed The Design</h1>
                    <p className="text-[8px] lg:text-[10px] text-gray-800/50 font-semibold mt-1 ml-2 lg:mr-1">A Brand New Website Desing</p>
                    </div>
                    <div className="mt-4 ml-2 lg:ml-18">
                    <p className="text-[8px] lg:text-[10px] bg-gray-200 rounded-sm px-1 ml-2">5 Days Ago</p>
                    </div>
                   </div>  
                  </button>

                  <hr className="text-gray-200 mx-3 my-2"></hr>
                  
                  <button className="flex w-full">
                    <img src="/imgs/news-03.png" className="h-10 w-20 lg:h-13 lg:w-26 rounded-md ml-3"/>
                   <div className="flex justify-between w-full mr-3 hover:bg-gray-200"> 
                    <div className="lg:mt-2">
                    <h1 className="font-bold text-[10px] lg:text-xs mt-1 ml-2">Team Increased</h1>
                    <p className="text-[8px] lg:text-[10px] text-gray-800/50 font-semibold mt-1 ml-2 lg:mr-1">3 Developers Joined The Team</p>
                    </div>
                    <div className="mt-4 ml-2 lg:ml-18">
                    <p className="text-[8px] lg:text-[10px] bg-gray-200 rounded-sm px-1 ml-1">7 Days Ago</p>
                    </div>
                   </div> 
                  </button>

                   <hr className="text-gray-200 mx-3 my-2"></hr>
                  
                  <button className="flex w-full">
                    <img src="/imgs/news-04.png" className="h-10 w-20 lg:h-13 lg:w-26 rounded-md ml-3"/>
                   <div className="flex justify-between w-full mr-3 hover:bg-gray-200">
                    <div className="lg:mt-2">
                    <h1 className="font-bold text-[10px] lg:text-xs mt-1 ml-2">Added Payment Gateway</h1>
                    <p className="text-[7px] lg:text-[10px] text-gray-800/50 font-semibold mt-1 ml-2 lg:mr-1">Many New Payment Gateways Added</p>
                    </div>
                    <div className="mt-4 mb-4 lg:ml-10">
                    <p className="text-[8px] lg:text-[10px] bg-gray-200 rounded-sm px-1 ml-1">9 Days Ago</p>
                    </div>
                   </div>  
                  </button>
                  

        </div>
    )
}