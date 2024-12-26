import { useDispatch, useSelector } from "react-redux";
import Content from "./Content/Content";
import { useEffect } from "react";
import { ActIndex, CleanUp } from "../../../../Redux/MyPlan/MyPlanSlice";
import SkeletonLoading from "../../Loading/SkeletonLoading/SkeletonLoading";
import SwiperComponent from "../../Swiper/SwiperComponent";
import LottieFiles from "../../Loading/LottieLoading/LottieFiles";
const MyPlan = () => {;
  const dispatch = useDispatch();
  const { myGoals } = useSelector((state) => state.myGoal);
  const { myPlans, loading, error } = useSelector((state) => state.myPlan);
  useEffect(() => {
    dispatch(ActIndex());
    return () => {
      dispatch(CleanUp());
    };
  }, [myGoals, dispatch]);
  const newRecorde =
  Array.isArray(myPlans) ? myPlans.map((plans) => {
          const newPlans = plans.map((planLevel) => {
            return <Content key={planLevel.id} planLevel={planLevel} />;
          });
          return (
            <>
              {
                <>
                  {plans.length > 0 && (
                    <section className=" " id="blog" aria-label="blog">
                      <div
                        className="container"
                        style={{ position: "relative" }}
                      >
                        <h2
                          style={{
                            margin: "4rem 0",
                            textAlign: "center",
                            fontSize: "5rem",
                          }}
                        >
                          {plans.length > 0 && plans[0].plan_levels.plan.type}
                        </h2>
                        <ul className="class-list has-scrollbar">
                          <SwiperComponent data={newPlans} />
                        </ul>
                      </div>
                    </section>
                  )}
                </>
              }
            </>
          );
        })
      : "";
  return (
    <SkeletonLoading loading={loading} error={error} type="plan">
      {Array.isArray(myPlans) ? (
        newRecorde
      ) : (
        <LottieFiles
          type="error"
          message={"please wait to processing the goal"}
        />
      )}
    </SkeletonLoading>
  );
};
export default MyPlan;
