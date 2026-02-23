


export default function GeneralInfoCard(){
    return(
        <div className="bg-white rounded-md shadow-2xl">
            <h1 className="ml-3 mt-3 font-semibold">General Info</h1>
            <p className="text-[10px] md:text-xs mb-3 ml-3 mt-1 font-semibold text-gray-400">General Information About Your Account</p>

           <h1 className="ml-3 mb-1 text-gray-400 text-xs">First Name</h1>
            <div className="px-3 mb-3">
                <input type="text" className="border border-gray-300 rounded w-full py-1 text-gray-600 p-2 text-xs"
                placeholder="First Name"/>
            </div>

           <h1 className="ml-3 mb-1 text-gray-400 text-xs">Last Name</h1>
            <div className="px-3 mb-3">
                <input type="text" className="border border-gray-300 rounded w-full py-1 text-gray-600 p-2 text-xs"
                placeholder="Last Name"/>
            </div>

           <h1 className="ml-3 mb-1 text-gray-400 text-xs">Email</h1>
            <div className="px-3 mb-3 flex justify-between">
                <input type="text" className="border border-gray-300 bg-gray-100 rounded w-full py-2 text-gray-400 p-2 text-xs"
                placeholder="o@nn.sa"/>
                <button className="text-blue-600 px-4 text-xs cursor-pointer">Change</button>
            </div>
           
        
           
         
        </div>
    )
}