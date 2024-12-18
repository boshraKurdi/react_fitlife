import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {ActExerciseIndex} from "../../../Redux/Plan/PlanSlice";
import Stepper from "./Stepper/Stepper";
import { useNavigate } from "react-router-dom";
export default function Exercises({ setData, data }) {
  const { value } = useSelector((state) => state.mode);
  const nav = useNavigate()
  const { exercises, loading } = useSelector((state) => state.plan);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActExerciseIndex(data));
  }, [dispatch, data]);
  const newData = exercises && exercises[0]?.exercise?.map((data) => {
    return (
      <>
        <span className={`${value}`}>
          <img src={data.media && data.media[0].original_url} alt="none" />
        </span>
        <div className="exed" onClick={()=>{nav('/exerciseDetails/'+data.id)}}>
          <h4>{data.title}</h4>
          <p>{data.description}</p>
        </div>
      </>
    );
  });
  
  return (
    <section style={{alignItems: 'flex-start'}} className="section__container why__container" id="blog">
      <div className="why__image">
        <Stepper setData={setData} data={data} />
      </div>
      <div className="why__content">
        <h2 className="section__header">Exercises</h2>
        <p>
          Each day of the week has its own exercises that have been carefully
          studied to achieve physical fitness.
        </p>

        <div className={`why__grid`}>
          {loading === "pending" ? "loading..." : newData}
        </div>
      </div>
    </section>
  );
}
