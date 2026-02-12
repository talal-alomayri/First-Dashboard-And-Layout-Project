import SiteControlCard from "./CardsForSettings/SiteControlCard";
import GeneralInfoCard from "./CardsForSettings/GeneralInfoCard";
import SecurityInfoCard from "./CardsForSettings/SecurityInfoCard";
import SocialInfoCard from "./CardsForSettings/SocialInfoCard";
import WidgetsControlCard from "./CardsForSettings/WidgetsControlCard";
import BackupManagerCard from "./CardsForSettings/BackupManagerCard";



export default function CardSettings(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-3 mr-3 pb-3">
            <SiteControlCard/>
            <GeneralInfoCard/>
            <SecurityInfoCard/>
            <SocialInfoCard/>
            <WidgetsControlCard/>
            <BackupManagerCard/>
        </div>
    )
}