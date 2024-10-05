import GoalSkeleton from "../../Skeleton/GoalSkeleton";
import PlanSkeleton from "../../Skeleton/PlanSkeleton";
import LottieFiles from "../LottieLoading/LottieFiles";

export default function SkeletonLoading({loading , error , children , type}){
    const typeLoading = {
        goal: GoalSkeleton ,
        plan : PlanSkeleton
    }
    const Component = typeLoading[type];
    if (loading === 'pending') {
        return <Component />    
    }
    if (loading === 'failed') {
        return <LottieFiles type='error' message="error network" />
    }
    return(
        <>{children}</>
    )

}