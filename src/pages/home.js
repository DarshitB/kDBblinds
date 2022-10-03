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
        {/* <div className="maindetailes-nav">
          <div className="swapper-container">
            <Swiper
              modules={[Navigation, A11y, Autoplay]}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 2000 }}
            >
              <SwiperSlide>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </SwiperSlide>
              <SwiperSlide>Lorem Ipsum is simply dummy text</SwiperSlide>
              <SwiperSlide>
                Lorem Ipsum of the printing and typesetting industry.
              </SwiperSlide>
            </Swiper>
          </div>
        </div> */}
        <Navbar />
        <Herosection />
        <HowItWorks />
      </div>
    </>
  );
}

export default Home;
