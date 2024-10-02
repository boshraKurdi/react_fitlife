import "./Plan.css";
import { Plan_1 , Plan_2 , Plan_3 } from '../../../index';
export default function Plan() {
  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container">
        <p className="section-subtitle">Our News</p>

        <h2 className="h2 section-title text-center">Latest Blog Feed</h2>

        <ul className="blog-list has-scrollbar">
          <li className="scrollbar-item">
            <div className="blog-card">
              <div
                className="card-banner img-holder"
                // style="--width: 440; --height: 270;"
              >
                <img
                  src={Plan_1}
                  width="440"
                  height="270"
                  loading="lazy"
                  alt="Going to the gym for the first time"
                  className="img-cover"
                />

                <time className="card-meta">
                  7 July 2022
                </time>
              </div>

              <div className="card-content">
                <h3 className="h3">
                  <a href="index" className="card-title">
                    Going to the gym for the first time
                  </a>
                </h3>

                <p className="card-text">
                  Praesent id ipsum pellentesque lectus dapibus condimentum
                  curabitur eget risus quam. In hac habitasse platea dictumst.
                </p>

                <a href="index" className="btn-link has-before">
                  Read More
                </a>
              </div>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="blog-card">
              <div
                className="card-banner img-holder"
                // style="--width: 440; --height: 270;"
              >
                <img
                  src={Plan_2}
                  width="440"
                  height="270"
                  loading="lazy"
                  alt="Parturient accumsan cacus pulvinar magna"
                  className="img-cover"
                />

                <time className="card-meta">
                  7 July 2022
                </time>
              </div>

              <div className="card-content">
                <h3 className="h3">
                  <a href="index" className="card-title">
                    Parturient accumsan cacus pulvinar magna
                  </a>
                </h3>

                <p className="card-text">
                  Praesent id ipsum pellentesque lectus dapibus condimentum
                  curabitur eget risus quam. In hac habitasse platea dictumst.
                </p>

                <a href="index" className="btn-link has-before">
                  Read More
                </a>
              </div>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="blog-card">
              <div
                className="card-banner img-holder"
                // style="--width: 440; --height: 270;"
              >
                <img
                  src={Plan_3}
                  width="440"
                  height="270"
                  loading="lazy"
                  alt="Risus purus namien parturient accumsan cacus"
                  className="img-cover"
                />

                <time className="card-meta" >
                  7 July 2022
                </time>
              </div>

              <div className="card-content">
                <h3 className="h3">
                  <a href="index" className="card-title">
                    Risus purus namien parturient accumsan cacus
                  </a>
                </h3>

                <p className="card-text">
                  Praesent id ipsum pellentesque lectus dapibus condimentum
                  curabitur eget risus quam. In hac habitasse platea dictumst.
                </p>

                <a href="index" className="btn-link has-before">
                  Read More
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
