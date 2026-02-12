import ElzeroDashborad from "./CardProjectsPage/ElzeroDashboard"
import AcademyPortal from "./CardProjectsPage/AcademyPortal"
import ChattingApplication from "./CardProjectsPage/ChattingApplication"
import AhmedDashboard from "./CardProjectsPage/AhmedDashboard"
import AhmedPortal from "./CardProjectsPage/AhmedPortal"
import MohamedApplication from "./CardProjectsPage/MohamedApplication"
import MohamedDashboard from "./CardProjectsPage/MohamedDashboard"
import MohamedPortal from "./CardProjectsPage/MohamedPortal"
import AhmedApplication from "./CardProjectsPage/AhmedApplication"


export default function CardProjects(){
    return(
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-3 mr-3 pb-3">
           <ElzeroDashborad/>
           <AcademyPortal/>
           <ChattingApplication/>
           <AhmedDashboard/>
           <AhmedPortal/>
           <MohamedApplication/>
           <MohamedDashboard/>
           <MohamedPortal/>
           <AhmedApplication/>
        </div>
    )
}