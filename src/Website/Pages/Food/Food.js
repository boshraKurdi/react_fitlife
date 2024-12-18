import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../../Components/Food/Dashboard";
import Search from "../../Components/Food/Search";
import { ActIndex } from "../../../Redux/Meal/MealSlice";
import "./Food.css";
import { useEffect, useState } from "react";
import SkeletonLoading from "../../Components/Loading/SkeletonLoading/SkeletonLoading";
import LottieFiles from "../../Components/Loading/LottieLoading/LottieFiles";
export default function Food() {
  const [open, setOpen] = useState({
    breakfast: true,
    lunch: false,
    dinner: false,
    snack: false,
    day: 1,
    week: 1,
  });
  const { meals , id , loading, error } = useSelector((state) => state.meal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActIndex(open));
  }, [dispatch, open]);
  return (
    <div style={{ marginTop: "8rem" }} class="main">
      <Search open={open} setOpen={setOpen} />
       {Array.isArray(meals) ? <>
          <SkeletonLoading loading={loading} error={error} type="meal">
            <Dashboard meals={meals} id={id} />
          </SkeletonLoading>
        </>:<LottieFiles
          type="error"
          message={"please wait to processing the goal"}
        />}
    </div>
  );
}
