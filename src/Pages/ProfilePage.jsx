
import CardProfile from '../Components/CardProfile'


export default function ProfilePage(){

    return(  
           <div className=" bg-gray-200/40 pb-4 h-screen pt-14">
            <h1 className="font-semibold text-xl ml-3 pt-4">Profile</h1>
            <hr className="size-8 ml-3"></hr>
            <CardProfile/>
            </div>
        
    )
}