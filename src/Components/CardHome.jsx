import WelcomeCard from './CardsFoHomePage/WelcomeCard'
import QuickDraftCard from './CardsFoHomePage/QuickDraftCard'
import YearlyTargestCrad from './CardsFoHomePage/YearlyTargetsCard'
import TicketsStatisticsCard from './CardsFoHomePage/TicketsStatisticsCard'
import LatestNewsCrad from './CardsFoHomePage/LatestNewsCard'
import LatestTasksCard from './CardsFoHomePage/LatestTasksCard'
import TopSerachItemsCard from './CardsFoHomePage/TopSearchItemsCard'
import LatesUploadsCard from './CardsFoHomePage/LatestUploadsCard'
import LastProjectProgress from './CardsFoHomePage/LastProjectProgress'
import RemindersCard from './CardsFoHomePage/RemindersCard'
import LatestPostCard from './CardsFoHomePage/LatestPostCard'
import SocialMediaStats from './CardsFoHomePage/SocialMediaStats'
import ProjectCard from './CardsFoHomePage/ProjectsCard'

export default function Crads(){
    return(
       <div>
        {/* Here and on all Crads Components just call a specific part of
        the card or a function and but some parameters on it an
        all Card Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-3 mr-3">
          <WelcomeCard/>
          <QuickDraftCard/>
          <YearlyTargestCrad/>
          <TicketsStatisticsCard/>
          <LatestNewsCrad/>
          <LatestTasksCard/>
          <TopSerachItemsCard/>
          <LatesUploadsCard/>
          <LastProjectProgress/>
          <RemindersCard/>
          <LatestPostCard/>
          <SocialMediaStats/>
        </div>
          <div className='py-4'>
          <ProjectCard/>
          </div>
       </div>

    )
}