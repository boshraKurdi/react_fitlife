import { useDispatch, useSelector } from "react-redux";
import Content from "./Content/Content";
import { useEffect } from "react";
import { ActIndex, CleanUp } from "../../../../Redux/MyPlan/MyPlanSlice";
import SkeletonLoading from "../../Loading/SkeletonLoading/SkeletonLoading";
import SwiperComponent from "../../Swiper/SwiperComponent";
import Heading from "../../Heading/Heading";
const MyPlan = () => {
  console.log("Myplan component");
  const dispatch = useDispatch();
  const { myGoals } = useSelector((state) => state.myGoal);
  const { myPlans, loading, error } = useSelector((state) => state.myPlan);
  useEffect(() => {
    dispatch(ActIndex());
    return () => {
      dispatch(CleanUp());
    };
  }, [myGoals, dispatch]);
  const newRecorde = myPlans.map((plans) => {
    const newPlans = plans.map((planLevel) => {
      return <Content key={planLevel.id} planLevel={planLevel} />;
    });
    return (
      <>
        {
          <SkeletonLoading loading={loading} error={error} type="plan">
            {plans.length > 0 && (
              <section className="section blog" id="blog" aria-label="blog">
                <Heading
                  title="My Plan"
                  subTitle={plans.length > 0 && plans[0].plan_levels.plan.type}
                />
                <div className="container" style={{ position: "relative" }}>
                  <ul className="class-list has-scrollbar">
                    <SwiperComponent data={newPlans} />
                  </ul>
                </div>
              </section>
            )}
          </SkeletonLoading>
        }
      </>
    );
  });
  return <>{newRecorde}</>;
};
export default MyPlan;
