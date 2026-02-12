import FreeCardPlans from "./CardPlansPage/FreeCardPlans"
import BasicCardPlans from "./CardPlansPage/BasicCardPlans"
import PremiumCardPlans from "./CardPlansPage/PremiumCardPlans"


export default function CardPlans(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3 pb-3 gap-4">
          <FreeCardPlans/>
          <BasicCardPlans/>
          <PremiumCardPlans/>
        </div>
    )
}