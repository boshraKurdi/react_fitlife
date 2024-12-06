import '../../Pages/GoalDetails/GoalDetails.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Components from "../../Style/Components/Components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SkeletonLoading from "../../Components/Loading/SkeletonLoading/SkeletonLoading";
import { ActShow } from "../../../Redux/MyPlan/MyPlanSlice";
const Home = ({id}) => {
    const { MyComponentTitle } = Components()
    const dispatch = useDispatch()
    const { myplan , error , loading } = useSelector((state) => state.myPlan);
    const { value } = useSelector((state) => state.mode);
    useEffect(()=>{
      dispatch(ActShow(id)).unwrap()
    } , [dispatch , id])
  return (
    <>
    <SkeletonLoading loading={loading} error={error} type="detailsGoal">
      <div className={`card top ${value}`}>
      <div className="product-imgs">
      <div style={{justifyContent:'center' , display:'flex'}} className="img-display">
            <div style={{width:'100%' , height:'400px'}} className="img-showcase">
              <img style={{borderRadius:'50%' , width:'75%', minWidth:'400px' , objectFit:'contain'}} src={myplan.plan?.media && myplan.plan.media[0].original_url} alt="shoe" />
          </div>
        </div>
      </div>
      <div className="product-content">
        <MyComponentTitle className="product-title">myPlan Details</MyComponentTitle>
        <a href="index" className="product-link">
          myPlans in fitlife
        </a>

        <div className="product-detail">
          <h1 style={{padding:'1rem 0'}}>about this myPlan: </h1>
          <p>{myplan.plan && myplan.plan.description}</p>
          <ul>
            <li>
              <CheckCircleIcon />
              myplan: <span>{myplan.plan && myplan.plan.title}</span>
            </li>
            <li>
              <CheckCircleIcon />
              muscle: <span>{myplan.plan && myplan.plan.muscle}</span>
            </li>
            <li>
              <CheckCircleIcon />
              level: <span>{myplan.level && myplan.level.title}</span>
            </li>
            <li>
              <CheckCircleIcon />
              duration: <span>{myplan && myplan.plan?.duration}</span>
            </li>
            <li>
            <div style={{width: '100%'}} className="card-progress">
              <div className="progress-wrapper">
                <p style={{color: value === 'dark' ? '#fff' : '#000'}} className="progress-label">Class Full</p>

                <span style={{color: value === 'dark' ? '#fff' : '#000'}} className="progress-value">{myplan.targets && (myplan.targets[0].rate ? myplan.targets[0].rate : 0)+'%'}</span>
              </div>

              <div className="progress-bg">
                <div
                  className="progress-bar"
                  style={{ width: `${myplan.targets && (myplan.targets[0].rate ? myplan.targets[0].rate : 0)}` }}
                ></div>
              </div>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </SkeletonLoading>
    </>
  );
};
export default Home;
