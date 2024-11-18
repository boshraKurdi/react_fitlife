import { useDispatch, useSelector } from "react-redux";
import { Goal_1 } from "../../../index";
import Content from "./Content/Content";
import { useEffect } from "react";
import { ActGetMyGoal, CleanUp } from "../../../../Redux/MyGaol/MyGoalSlice";
import SkeletonLoading from "../../Loading/SkeletonLoading/SkeletonLoading";
import SwiperComponent from "../../Swiper/SwiperComponent";
import LottieFiles from "../../Loading/LottieLoading/LottieFiles";
import Heading from "../../Heading/Heading";
const MyGoal = () => {
  const dispatch = useDispatch();
  const { myGoals, loading, error } = useSelector((state) => state.myGoal);
  useEffect(() => {
    dispatch(ActGetMyGoal());
    return () => {
      dispatch(CleanUp());
    };
  }, [dispatch]);
  const newMyGoal = myGoals.map((plan) => {
    return <Content key={plan.id} plan={plan} />;
  });
  console.log(myGoals[0]?.targets[0].rate)
  return (
    <>
    {
    <section
      className="section top has-bg-image"
      id="class"
      aria-label="class"
      style={{ backgroundImage: `url(${Goal_1})` }}
    >
      <div className="container" style={{ position: "relative" }}>
        <Heading title="My Plans" subTitle='Plans With Work Rate' />
        <ul className="class-list has-scrollbar">
          <SkeletonLoading loading={loading} error={error} type="plan">
            {(myGoals.length > 0  && myGoals[0]?.targets[0].rate !== null) ? (
              <SwiperComponent data={newMyGoal} />
            ) : (
              <LottieFiles message="My Plan is empty" type="empty" />
            )}
          </SkeletonLoading>
        </ul>
      </div>
    </section>
          }
        </>
  );
};
export default MyGoal;
