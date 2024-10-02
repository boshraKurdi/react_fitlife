import "./Goal.css";
import { Goal_1 , Goal_2 , Goal_3 , Goal_4 , Goal_5 , Goal_6 , Goal_7 , Goal_8 } from '../../../index'
export default function Goal() {
  return (
    <section
      className="section class has-bg-image"
      id="class"
      aria-label="class"
      style={{ backgroundImage: `url(${Goal_1})` }}
    >
      <div className="container">
        <p className="section-subtitle">Our Classes</p>

        <h2 className="h2 section-title text-center">
          Fitness Classes For Every Goal
        </h2>

        <ul className="class-list has-scrollbar">
          <li className="scrollbar-item">
            <div className="class-card">
              <figure
                className="card-banner img-holder"
                // style="--width: 416; --height: 240;"
              >
                <img
                  src={Goal_6}
                  width="416"
                  height="240"
                  loading="lazy"
                  alt="Weight Lifting"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <div className="title-wrapper">
                  <img
                    src={Goal_2}
                    width="52"
                    height="52"
                    aria-hidden="true"
                    alt=""
                    className="title-icon"
                  />

                  <h3 className="h3">
                    <a href="index" className="card-title">
                      Weight Lifting
                    </a>
                  </h3>
                </div>

                <p className="card-text">
                  Suspendisse nisi libero, cursus ac magna sit amet, fermentum
                  imperdiet nisi.
                </p>

                <div className="card-progress">
                  <div className="progress-wrapper">
                    <p className="progress-label">Class Full</p>

                    <span className="progress-value">85%</span>
                  </div>

                  <div className="progress-bg">
                    <div className="progress-bar" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="class-card">
              <figure
                className="card-banner img-holder"
                // style="--width: 416; --height: 240;"
              >
                <img
                  src={Goal_7}
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

                  <h3 className="h3">
                    <a href="index" className="card-title">
                      Cardio & Strenght
                    </a>
                  </h3>
                </div>

                <p className="card-text">
                  Suspendisse nisi libero, cursus ac magna sit amet, fermentum
                  imperdiet nisi.
                </p>

                <div className="card-progress">
                  <div className="progress-wrapper">
                    <p className="progress-label">Class Full</p>

                    <span className="progress-value">70%</span>
                  </div>

                  <div className="progress-bg">
                    <div className="progress-bar" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="class-card">
              <figure
                className="card-banner img-holder"
                // style="--width: 416; --height: 240;"
              >
                <img
                  src={Goal_8}
                  width="416"
                  height="240"
                  loading="lazy"
                  alt="Power Yoga"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <div className="title-wrapper">
                  <img
                    src={Goal_4}
                    width="52"
                    height="52"
                    aria-hidden="true"
                    alt=""
                    className="title-icon"
                  />

                  <h3 className="h3">
                    <a href="index" className="card-title">
                      Power Yoga
                    </a>
                  </h3>
                </div>

                <p className="card-text">
                  Suspendisse nisi libero, cursus ac magna sit amet, fermentum
                  imperdiet nisi.
                </p>

                <div className="card-progress">
                  <div className="progress-wrapper">
                    <p className="progress-label">Class Full</p>

                    <span className="progress-value">90%</span>
                  </div>

                  <div className="progress-bg">
                    <div className="progress-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="class-card">
              <figure
                className="card-banner img-holder"
                // style="--width: 416; --height: 240;"
              >
                <img
                  src={Goal_8}
                  width="416"
                  height="240"
                  loading="lazy"
                  alt="The Fitness Pack"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <div className="title-wrapper">
                  <img
                    src={Goal_5}
                    width="52"
                    height="52"
                    aria-hidden="true"
                    alt=""
                    className="title-icon"
                  />

                  <h3 className="h3">
                    <a href="index" className="card-title">
                      The Fitness Pack
                    </a>
                  </h3>
                </div>

                <p className="card-text">
                  Suspendisse nisi libero, cursus ac magna sit amet, fermentum
                  imperdiet nisi.
                </p>

                <div className="card-progress">
                  <div className="progress-wrapper">
                    <p className="progress-label">Class Full</p>

                    <span className="progress-value">60%</span>
                  </div>

                  <div className="progress-bg">
                    <div className="progress-bar" style={{width: "60%"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
