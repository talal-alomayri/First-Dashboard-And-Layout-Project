import { Switch } from '@headlessui/react'

export default function SiteControlCard(){
    return(
        <div className="bg-white rounded-md shadow-2xl">
            <h1 className="ml-3 mt-3 font-semibold">Site Control</h1>
            <p className="text-[10px] md:text-xs ml-3 mt-1 font-semibold text-gray-400">Control The Website If There Is Maintenance</p>

         <div className='flex justify-between mr-3'>
            <div>
            <h1 className="ml-3 mt-3 text-xs">Website Control</h1>
            <p className="text-[10px] md:text-xs ml-3 mt-1 font-semibold text-gray-400">Open/Close Website And Type The Reason</p>
           </div>
            <Switch className="mt-6 ml-2 group relative flex lg:h-6 lg:w-18 h-4 w-9 cursor-pointer rounded-full bg-blue-500 hover:bg-blue-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-blue-500 data-focus:outline data-focus:outline-white">  
                <span aria-hidden="true"
                className="pointer-events-none inline-block lg:size-4 size-2 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-5 lg:group-data-checked:translate-x-12"/>
            </Switch>
         </div>  
          <div className='px-3'>
          <input type="text" className="my-4 pb-18 lg:pb-24 border-gray-300 border rounded-sm w-full placeholder:text-[10px] 
               placeholder:pl-1 font-semibold text-gray-800/70"
              placeholder="Close Message Content"/>
          </div>
        </div>
    )
}