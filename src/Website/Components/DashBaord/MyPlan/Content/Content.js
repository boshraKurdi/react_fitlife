import { SwiperSlide } from "swiper/react";
import Level from "../../../Level/Level";
import Components from "../../../../Style/Components/Components";
import { Link } from "react-router-dom";
export default function Content({ planLevel }) {
  const { MyComponentHeroSubtitleH3 } = Components();
  return (
    <SwiperSlide  key={planLevel.plan_levels && planLevel.plan_levels.plan.id}>
        <li className="scrollbar-item">
          <div className="class-card">
            <figure className="card-banner img-holder">
              <img
                src={planLevel.plan_levels.plan.media && planLevel.plan_levels.plan.media[0].original_url}
                width="416"
                height="240"
                loading="lazy"
                alt="Cardio & Strenght"
                className="img-cover"
              />
            </figure>

            <div className="card-content">
              <div className="title-wrapper">
                <Level num={planLevel.plan_levels?.level.id} />

                <MyComponentHeroSubtitleH3 className="h3">
                  <Link to={`/planDetails/${planLevel.plan_levels.id}`} className="card-title">
                  {planLevel.plan_levels && planLevel.plan_levels.plan.title}
                  </Link>
                </MyComponentHeroSubtitleH3>
              </div>
            </div>
          </div>
        </li>
      </SwiperSlide>
  );
}
