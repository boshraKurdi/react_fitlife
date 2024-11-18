import { SwiperSlide } from "swiper/react";
import Components from "../../../../Style/Components/Components";
import Level from "../../../Level/Level";

const Content = ({ plan })=> {
  const { MyComponentHeroSubtitleH3 } = Components();
    return (
      <SwiperSlide >
        <li className="scrollbar-item">
          <div className="class-card">
            <figure className="card-banner img-holder">
              <img
                src={plan.plan && plan.plan.media[0].original_url}
                width="416"
                height="240"
                loading="lazy"
                alt="Cardio & Strenght"
                className="img-cover"
              />
            </figure>

            <div className="card-content">
              <div className="title-wrapper">
                <Level num={plan.level && plan.level.id} />

                <MyComponentHeroSubtitleH3 className="h3">
                  <a href="index" className="card-title">
                    {plan.plan && plan.plan.title}
                  </a>
                </MyComponentHeroSubtitleH3>
              </div>

              <p className="card-text">{plan.plan && plan.plan.description}</p>

              <div className="card-progress">
              <div className="progress-wrapper">
                <p className="progress-label">Class Full</p>

                <span className="progress-value">{plan.targets && plan.targets[0].rate}</span>
              </div>

              <div className="progress-bg">
                <div
                  className="progress-bar"
                  style={{ width: `${plan.targets && plan.targets[0].rate}` }}
                ></div>
              </div>
            </div>
            </div>
          </div>
        </li>
      </SwiperSlide>
    )
}
export default Content