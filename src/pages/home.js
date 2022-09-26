import React from "react";
import Herosection from "../components/herosection";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/navbar";
import { Navigation, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
function Home() {
  return (
    <>
      <div className="Home-page-wrapper">
        <div className="maindetailes-nav">
          <div className="swapper-container">
            <Swiper
              modules={[Navigation, A11y, Autoplay]}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 2000 }}
            >
              <SwiperSlide>
                Good news! We’re dispatching as normal with contactless
                delivery.
              </SwiperSlide>
              <SwiperSlide>
                Next Day Dispatch Available on Selected Blinds
              </SwiperSlide>
              <SwiperSlide>
                Measure with confidence. MeasureSure Cover available
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <Navbar />
        <Herosection />
        <HowItWorks />
      </div>
    </>
  );
}

export default Home;
