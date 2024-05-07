// icons
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

export default function Reviews() {
  return (
    <section className="mil-soft-bg">
      <div className="container mil-p-120-120">
        <div className="row">
          <div className="col-lg-10">
            <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
              Customer reviews are a valuable source <br />
              of information for both businesses and consumers.
            </span>
          </div>
        </div>

        <h2 className="mil-center mil-up mil-mb-60">
          Customer <span className="mil-thin">Voices:</span> <br />
          Hear What
          <span className="mil-thin">They Say!</span>
        </h2>

        <div className="mil-revi-pagination mil-up mil-mb-60"></div>

        <div className="row mil-relative justify-content-center">
          <div className="col-lg-8">
            <div className="mil-slider-nav mil-soft mil-reviews-nav mil-up">
              <div className="mil-slider-arrow mil-revi-next ">
                <FaArrowRight className="mil-arrow" />
              </div>
              <div className="mil-slider-arrow mil-prev mil-revi-prev ">
                <FaArrowRight className="mil-arrow" />
              </div>
            </div>

            <RiDoubleQuotesR className="mil-quote-icon mil-up" />

            <div className="swiper-container mil-reviews-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div
                    className="mil-review-frame mil-center"
                    data-swiper-parallax="-200"
                    data-swiper-parallax-opacity="0"
                  >
                    <h5 className="mil-up mil-mb-10">Sarah Newman</h5>
                    <p className="mil-mb-5 mil-upper mil-up mil-mb-30">
                      Envato market
                    </p>
                    <p className="mil-text-xl mil-up">
                      This creative agency stands out with their exceptional
                      talent and expertise. Their ability to think outside the
                      box and bring unique ideas to life is truly impressive.
                      With meticulous attention to detail, they consistently
                      deliver visually stunning and impactful work.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="mil-review-frame mil-center"
                    data-swiper-parallax="-200"
                    data-swiper-parallax-opacity="0"
                  >
                    <h5 className="mil-up mil-mb-10">Emma Trueman</h5>
                    <p className="mil-mb-5 mil-upper mil-up mil-mb-30">
                      Envato market
                    </p>
                    <p className="mil-text-xl mil-up">
                      I had the pleasure of working with this creative agency,
                      and I must say, they truly impressed me. They consistently
                      think outside the box, resulting in impressive and
                      impactful work. I highly recommend this agency for their
                      consistent delivery of exceptional creative solutions.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="mil-review-frame mil-center"
                    data-swiper-parallax="-200"
                    data-swiper-parallax-opacity="0"
                  >
                    <h5 className="mil-up mil-mb-10">Sarah Newman</h5>
                    <p className="mil-mb-5 mil-upper mil-up mil-mb-30">
                      Envato market
                    </p>
                    <p className="mil-text-xl mil-up">
                      This creative agency stands out with their exceptional
                      talent and expertise. Their ability to think outside the
                      box and bring unique ideas to life is truly impressive.
                      With meticulous attention to detail, they consistently
                      deliver visually stunning and impactful work.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="mil-review-frame mil-center"
                    data-swiper-parallax="-200"
                    data-swiper-parallax-opacity="0"
                  >
                    <h5 className="mil-up mil-mb-10">Emma Trueman</h5>
                    <p className="mil-mb-5 mil-upper mil-up mil-mb-30">
                      Envato market
                    </p>
                    <p className="mil-text-xl mil-up">
                      I had the pleasure of working with this creative agency,
                      and I must say, they truly impressed me. They consistently
                      think outside the box, resulting in impressive and
                      impactful work. I highly recommend this agency for their
                      consistent delivery of exceptional creative solutions.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="mil-review-frame mil-center"
                    data-swiper-parallax="-200"
                    data-swiper-parallax-opacity="0"
                  >
                    <h5 className="mil-up mil-mb-10">Sarah Newman</h5>
                    <p className="mil-mb-5 mil-upper mil-up mil-mb-30">
                      Envato market
                    </p>
                    <p className="mil-text-xl mil-up">
                      This creative agency stands out with their exceptional
                      talent and expertise. Their ability to think outside the
                      box and bring unique ideas to life is truly impressive.
                      With meticulous attention to detail, they consistently
                      deliver visually stunning and impactful work.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="mil-review-frame mil-center"
                    data-swiper-parallax="-200"
                    data-swiper-parallax-opacity="0"
                  >
                    <h5 className="mil-up mil-mb-10">Emma Trueman</h5>
                    <p className="mil-mb-5 mil-upper mil-up mil-mb-30">
                      Envato market
                    </p>
                    <p className="mil-text-xl mil-up">
                      I had the pleasure of working with this creative agency,
                      and I must say, they truly impressed me. They consistently
                      think outside the box, resulting in impressive and
                      impactful work. I highly recommend this agency for their
                      consistent delivery of exceptional creative solutions.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="mil-review-frame mil-center"
                    data-swiper-parallax="-200"
                    data-swiper-parallax-opacity="0"
                  >
                    <h5 className="mil-up mil-mb-10">Sarah Newman</h5>
                    <p className="mil-mb-5 mil-upper mil-up mil-mb-30">
                      Envato market
                    </p>
                    <p className="mil-text-xl mil-up">
                      This creative agency stands out with their exceptional
                      talent and expertise. Their ability to think outside the
                      box and bring unique ideas to life is truly impressive.
                      With meticulous attention to detail, they consistently
                      deliver visually stunning and impactful work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
