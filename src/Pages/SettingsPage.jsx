
import CardSettings from '../Components/CardSettings'


export default function SettingsPage(){

    return(
        <div className="">
        
           <div className=" bg-gray-200/40 pb-4 h-screen pt-14">
            <h1 className="font-semibold text-xl ml-3 pt-4">Settings</h1>
            <hr className="size-8 ml-3"></hr>
            <CardSettings/>
            </div>
        </div>
    )
}