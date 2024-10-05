import {
  Goal_3,
} from "../../../../index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";
import { ActIndex, CleanUp } from "../../../../Redux/Goal/GoalSlice";
import Components from "../../../../Style/Components/Components";
import SkeletonLoading from "../../../Loading/SkeletonLoading/SkeletonLoading";
export default function Content() {
  const dispatch = useDispatch();
  const { goals , loading , error } = useSelector((state)=> state.goal);
  const { MyComponentHeroSubtitleH3 } = Components();
  useEffect(() => {
    dispatch(ActIndex());
    return () => {
      dispatch(CleanUp())
  }
  } , [dispatch])
  const newGoals = goals.map((goal)=>{
    return(
      <SwiperSlide key={goal.id}>
      <li className="scrollbar-item">
        <div className="class-card">
          <figure className="card-banner img-holder">
            <img
              src={goal.media[0] && goal.media[0].original_url}
              width="416"
              height="240"
              loading="lazy"
              alt="Cardio & Strenght"
              className="img-cover"
            />
          </figure>

          <div className="card-content">
            <div className="title-wrapper">
              <img
                src={Goal_3}
                width="52"
                height="52"
                aria-hidden="true"
                alt=""
                className="title-icon"
              />

              <MyComponentHeroSubtitleH3 className="h3">
                <a href="index" className="card-title">
                  {goal.title}
                </a>
              </MyComponentHeroSubtitleH3>
            </div>

            <p className="card-text">
              {goal.description}
            </p>

            {/* <div className="card-progress">
              <div className="progress-wrapper">
                <p className="progress-label">Class Full</p>

                <span className="progress-value">70%</span>
              </div>

              <div className="progress-bg">
                <div
                  className="progress-bar"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div> */}
          </div>
        </div>
      </li>
    </SwiperSlide>

    )
  })

  return (
    <SkeletonLoading loading={loading} error={error} type='goal'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ el: "", clickable: true }}
        navigation={{
          nextEl: ".Next",
          prevEl: ".Prev",
          clickable: true,
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
      >
        {newGoals}
      </Swiper>
    </SkeletonLoading>
  );
}
