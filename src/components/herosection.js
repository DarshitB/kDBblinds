import React from "react";
import { Navigation, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
function Herosection() {
  return (
    <>
      <div className="herosectionmaincomtainer">
        <div className="swapper-hero-container">
          <div className="swapper-hero-box">
            <Swiper
              modules={[Navigation, A11y, Autoplay]}
              slidesPerView={1}
              speed={1200}
              navigation
              autoplay={{ delay: 5000 }}
              loop={true}
            >
              <SwiperSlide>
                <img src="/assets/img/slide-interior-3.jpg" alt="" />
                <div className="overlay-slider"></div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/img/slide-interior-1.jpg" alt="" />
                <div className="overlay-slider"></div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/img/slide-interior-2.jpg" alt="" />
                <div className="overlay-slider"></div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/img/slide-interior-4.jpg" alt="" />
                <div className="overlay-slider"></div>
              </SwiperSlide>
            </Swiper>
            <div className="caroselhadding">
              <h3>
                The perfect choice for your{" "}
                <span
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  beautiful windows
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="end-sec-herosection">
          <h1>Ordering Blinds Made Easy</h1>
          <p>Delivering all over UK</p>
          <button className="big-btn">Know about Us more</button>
        </div>
      </div>
    </>
  );
}

export default Herosection;
