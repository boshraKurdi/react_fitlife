import GoalSkeleton from "../../Skeleton/GoalSkeleton";
import PlanSkeleton from "../../Skeleton/PlanSkeleton";
import GoalDetailsSkeleton from "../../Skeleton/GoalDetailsSkeleton";
import ChatSkeleton from "../../Skeleton/ChatSkeleton";
import MealSkeleton from "../../Skeleton/MealSkeleton";
import HeaderChatSkeleton from "../../Skeleton/HeaderChatSkeleton";
import LottieFiles from "../LottieLoading/LottieFiles";

export default function SkeletonLoading({loading , error ='' , children , type}){
    const typeLoading = {
        goal: GoalSkeleton ,
        plan : PlanSkeleton ,
        detailsGoal: GoalDetailsSkeleton ,
        chat: ChatSkeleton ,
        headerChat: HeaderChatSkeleton ,
        meal: MealSkeleton
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