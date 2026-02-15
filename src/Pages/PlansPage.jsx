
import CradPlans from '../Components/CardPlans'

export default function PlansPage(){
    return(
        <div className="">
            
             <div className=" bg-gray-200/40 h-full pb-4">
            <h1 className="font-semibold text-xl ml-3 pt-4">Plans</h1>
            <hr className="size-8 ml-3"></hr>
            <CradPlans/>
            </div>
              

            
        </div>
    )
}