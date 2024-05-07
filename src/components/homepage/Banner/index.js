// icons
import { FaArrowRight } from "react-icons/fa6";

export default function Banner() {
  return (
    <section className="mil-banner mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="mil-animation-frame">
          <div
            className="mil-animation mil-position-1 mil-scale"
            data-value-1="7"
            data-value-2="1.6"
          ></div>
          <div
            className="mil-animation mil-position-2 mil-scale"
            data-value-1="4"
            data-value-2="1"
          ></div>
          <div
            className="mil-animation mil-position-3 mil-scale"
            data-value-1="1.2"
            data-value-2=".1"
          ></div>
        </div>

        <div className="mil-gradient"></div>

        <div className="container">
          <div className="mil-banner-content mil-up">
            <h1 className="mil-muted mil-mb-60">
              Designing <span className="mil-thin">a Better</span>
              <br />
              World <span className="mil-thin">Today</span>
            </h1>
            <div className="row">
              <div className="col-md-7 col-lg-5">
                <p className="mil-light-soft mil-mb-60">
                  Welcome to our world of endless imagination and boundless
                  creativity. Together, let's embark on a remarkable journey
                  where dreams become tangible realities.
                </p>
              </div>
            </div>

            <a href="services.html" className="mil-button  mil-btn-space">
              <span>What we do</span>
              <FaArrowRight className="mil-arrow" />
            </a>

            <a href="portfolio-1.html" className="mil-link mil-muted ">
              <span>View works</span>
              <FaArrowRight className="mil-arrow" />
            </a>

            <div className="mil-circle-text">
              {/* <svg
              className="mil-ct-svg mil-rotate"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 300 300"
                enable-background="new 0 0 300 300"
                xml:space="preserve"
                data-value="360"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                  />
                </defs>
                <circle cx="150" cy="100" r="75" fill="none" />
                <g>
                  <use xlink:href="#circlePath" fill="none" />
                  <text style="letter-spacing: 6.5px">
                    <textPath xlink:href="#circlePath">
                      Scroll down - Scroll down -
                    </textPath>
                  </text>
                </g>
              </svg> */}
              <a
                href="#about"
                className="mil-button mil-icon-button mil-arrow-down"
              >
                <FaArrowRight className="mil-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
