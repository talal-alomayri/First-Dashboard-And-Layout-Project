import { Switch } from '@headlessui/react'

export default function SiteControlCard(){
    return(
        <div className="bg-white rounded-md shadow-2xl">
            <h1 className="ml-3 mt-3 font-semibold">Security Info</h1>
            <p className="text-[10px] md:text-xs ml-3 mt-1 font-semibold text-gray-400">Security Information About Your Account</p>

         <div className='flex justify-between mr-3'>
            <div>
            <h1 className="ml-3 mt-3 text-xs">Password</h1>
            <p className="text-[10px] ml-3 mt-1 font-semibold text-gray-400">Last Change On 25/10/2021</p>
           </div>
            <button className="text-xs lg:text-sm bg-blue-600 hover:bg-blue-400 text-white px-2 rounded my-3 cursor-pointer">Change</button>
         </div>  

         <hr className='text-gray-200 mx-3 mt-3'></hr>

         <div className='flex justify-between mr-3'>
            <div>
            <h1 className="ml-3 mt-3 text-xs">Two-Factor Authentication</h1>
            <p className="text-[10px] md:text-xs ml-3 mt-1 font-semibold text-gray-400">Enable/Disable The Feature</p>
           </div>
            <Switch className="mt-5 ml-2 group relative flex lg:h-5 lg:w-16 h-4 w-10 cursor-pointer rounded-full bg-blue-500 hover:bg-blue-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-blue-500 data-focus:outline data-focus:outline-white">  
                <span aria-hidden="true"
                className="pointer-events-none inline-block lg:size-3 size-2 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-6 lg:group-data-checked:translate-x-11"/>
            </Switch>
         </div>  

          <hr className='text-gray-200 mx-3 mt-3'></hr>

          <div className='flex justify-between mr-3 mb-3'>
            <div>
            <h1 className="ml-3 mt-3 text-xs">Devices</h1>
            <p className="text-[10px] ml-3 mt-1 font-semibold text-gray-400">Check The Login Devices List</p>
           </div>
            <button className="text-xs lg:text-sm bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold px-2 rounded mt-5 cursor-pointer">Devives</button>
         </div>  

        </div>
    )
}