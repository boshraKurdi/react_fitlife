import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActShow } from "../../Redux/Dashboard/Plan/PlanSlice";
import { useParams } from "react-router-dom";
const UseDetalisPlan = () => {
  const { id } = useParams();
  const { plan, loadingShow, error } = useSelector((state) => state.Dplan);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActShow(id));
  }, [dispatch, id]);
  return { plan, loadingShow, error };
};
export default UseDetalisPlan;
