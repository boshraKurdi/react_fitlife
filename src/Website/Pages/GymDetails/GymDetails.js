import '../GoalDetails/GoalDetails.css'
import { useDispatch, useSelector } from "react-redux";
import Components from "../../Style/Components/Components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import SkeletonLoading from "../../Components/Loading/SkeletonLoading/SkeletonLoading";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GetMap from "../../Components/GetMap/GetMap";
import { ActShow } from "../../../Redux/Gym/GymSlice";
export default function GymDetails() {
  const { MyComponentTitle } = Components();
  const dispatch = useDispatch();
  const { gym , error, loading } = useSelector((state) => state.gym);
  const { id } = useParams();
  useEffect(() => {
    dispatch(ActShow(id));
  }, [dispatch, id]);
  console.log(gym)
  return (
    <SkeletonLoading loading={loading} error={error} type="detailsGoal">
      <div className="card top">
        <div className="product-imgs">
          <div style={{justifyContent:'center' , display:'flex'}} className="img-display">
            <div style={{width:'100%' , height:'400px'}} className="img-showcase">
              <img style={{borderRadius:'8px' , width:'75%', minWidth:'400px'}} src={gym.media && gym.media[0].original_url} alt="shoe" />
            </div>
          </div>
        </div>
        <div className="product-content">
          <MyComponentTitle className="product-title">
            Gym Details
          </MyComponentTitle>
          <a href="index" className="product-link">
            gym with fitlife
          </a>

          <div className="product-detail">
            <h1 style={{ padding: "1rem 0" }}>about this gym: </h1>
            <p>{gym.description}</p>
            <ul>
              <li>
                <CheckCircleIcon />
                gym: <span>{gym.name}</span>
              </li>
              <li>
                <CheckCircleIcon />
                distance: <span>{gym.distance+'km'}</span>
              </li>
              <li>
                <CheckCircleIcon />
                address: <span>{gym.location && gym.location.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <GetMap data={gym.location && gym.location} />
    </SkeletonLoading>
  );
}
