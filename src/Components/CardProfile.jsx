import MainProfile from "../CardsProfilePage/MainProfile"
import MySkillsCard from "../CardsProfilePage/MySkillsCard"
import LatesActivitesCard from "../CardsProfilePage/LatestActivitiesCard"

export default function CardProfile(){
    return(
         <div className="mx-3">
           <MainProfile/>
           
           <div className="flex gap-4 mt-4">
            <MySkillsCard/>
            <LatesActivitesCard/>
           </div>
          
        </div>
    )
}