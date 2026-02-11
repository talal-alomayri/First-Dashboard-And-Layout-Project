



export default function WidgetsControlCard(){
    return(
        <div className="bg-white rounded-md shadow-2xl">
            <h1 className="ml-3 mt-3 font-semibold">widgets Control</h1>
            <p className="text-[10px] md:text-xs ml-3 mt-1 font-semibold text-gray-400">Show/Hide Widgets</p>

            <ul className="ml-5 mt-2 ">
                <li className="flex my-3">
                    <input type="checkbox" className="size-4 cursor-pointer"/>
                     <label for="checkbox" className="text-sm ml-2 -mt-0.5"> Quick Draft</label>
                </li>
                <li className="flex my-3">
                    <input type="checkbox" className="size-4 cursor-pointer"/>
                     <label for="checkbox" className="text-sm ml-2 -mt-0.5"> Yearly Tragets</label>
                </li>
                <li className="flex my-3">
                    <input type="checkbox" className="size-4 cursor-pointer"/>
                     <label for="checkbox" className="text-sm ml-2 -mt-0.5"> Tickets Statistics</label>
                </li>
                <li className="flex my-3">
                    <input type="checkbox" className="size-4 cursor-pointer"/>
                     <label for="checkbox" className="text-sm ml-2 -mt-0.5"> Latest News</label>
                </li>
                <li className="flex my-3">
                    <input type="checkbox" className="size-4 cursor-pointer"/>
                     <label for="checkbox" className="text-sm ml-2 -mt-0.5"> Latest Tasks</label>
                </li>
                <li className="flex my-3">
                    <input type="checkbox" className="size-4 cursor-pointer"/>
                     <label for="checkbox" className="text-sm ml-2 -mt-0.5"> Top Search Items</label>
                </li>
            </ul>

        </div>
    )
}