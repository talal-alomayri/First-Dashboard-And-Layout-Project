




export default function LatesActivitesCard(){
    return(
        <div className="bg-white rounded-md pb-5 shadow-2xl w-full overflow-auto">
          
              <h1 className="ml-3 mt-3 font-semibold">Latest Activities</h1>
              <p className="ml-3 mb-3 text-xs text-gray-800/50 font-semibold">Latest Activities Done By The User</p> 


              <div className="flex mx-3">
                <img src="/imgs/activity-01.png" className="size-9 -mt-1"/>
                <div className="flex justify-between w-full">
                <div className="text-[10px] ml-1">
                  <h1>Store</h1>
                  <p className="text-gray-400">Bought The Mastering Python Course</p>
                </div>
                <div className="text-[10px] text-end">
                  <h1>18:10</h1>
                  <p className="text-gray-400">Yesterday</p>
                </div>
                </div>
              </div>
              <hr className="text-gray-300 my-2"></hr>
              <div className="flex mx-3">
                <img src="/imgs/activity-02.png" className="size-9 -mt-1"/>
                <div className="flex justify-between w-full">
                <div className="text-[10px] ml-1">
                  <h1>Academy</h1>
                  <p className="text-gray-400">Got The PHP Certificate</p>
                </div>
                <div className="text-[10px] text-end">
                  <h1>16:05</h1>
                  <p className="text-gray-400">Yesterday</p>
                </div>
                </div>
              </div>
              <hr className="text-gray-300 my-2"></hr>
              <div className="flex mx-3">
                <img src="/imgs/activity-03.png" className="size-9 -mt-1"/>
                <div className="flex justify-between w-full">
                <div className="text-[10px] ml-1">
                  <h1>Badges</h1>
                  <p className="text-gray-400">Unlocked The 10 Skills Badge</p>
                </div>
                <div className="text-[10px] text-end">
                  <h1>18:05</h1>
                  <p className="text-gray-400">Yesterday</p>
                </div>
                </div>
              </div>
              <hr className="text-gray-300 my-2"></hr>
              <div className="flex mx-3">
                <img src="/imgs/activity-01.png" className="size-9 -mt-1"/>
                <div className="flex justify-between w-full">
                <div className="text-[10px] ml-1">
                  <h1>Store</h1>
                  <p className="text-gray-400">Bought The Typescript Course</p>
                </div>
                <div className="text-[10px] text-end">
                  <h1>12:05</h1>
                  <p className="text-gray-400">Yesterday</p>
                </div>
                </div>
              </div>
              


        </div>
    )
}