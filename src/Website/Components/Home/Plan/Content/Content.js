import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActIndex, CleanUp } from "../../../../Redux/Plan/PlanSlice";
import SkeletonLoading from "../../../Loading/SkeletonLoading/SkeletonLoading";
export default function Content() {
  const dispatch = useDispatch();
  const { plans, loading, error } = useSelector((state) => state.plan);
  useEffect(() => {
    dispatch(ActIndex());
    return () => {
      dispatch(CleanUp());
    };
  }, [dispatch]);
  const newPlans = plans.map((plan) => {
    return (
      <SwiperSlide key={plan.id}>
        <li className="scrollbar-item">
          <div className="blog-card">
            <div className="card-banner img-holder">
              <img
                src={plan.media[0] && plan.media[0].original_url}
                width="440"
                height="270"
                loading="lazy"
                alt="Going to the gym for the first time"
                className="img-cover"
              />

              <time className="card-meta">{plan.duration}</time>
            </div>

            <div className="card-content">
              <h3 className="h3">
                <a href="index" className="card-title">
                  {plan.title}
                </a>
              </h3>

              <p className="card-text">{plan.description}</p>

              <a href="index" className="btn-link has-before">
                Read More
              </a>
            </div>
          </div>
        </li>
      </SwiperSlide>
    );
  });
  return (
    <SkeletonLoading loading={loading} error={error} type="plan">
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
        {newPlans}
      </Swiper>
    </SkeletonLoading>
  );
}
