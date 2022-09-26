import React from "react";
import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Footer from "./footer";
import LatestBliendCollaction from "./LatestBliendCollaction";
import HowToMassure from "./HowToMassure";
import { Link } from "react-router-dom";
function HowItWorks() {
  return (
    <>
      <div className="howItWorkd-contaier">
        <div className="howItWorkd-box container">
          <h2>How it works</h2>
          <div className="main-howitworks">
            <div className="main-howitworks-items">
              <div className="main-howitworks-items-img">
                <img src="/assets/img/scale.png" alt="" />
              </div>
              <p>Measure your windows by following our simple guidelines.</p>
            </div>
            <div className="main-howitworks-items">
              <div className="main-howitworks-items-img">
                <img src="/assets/img/tick-check.png" alt="" />
              </div>
              <p>Choose your perfect window blinds.</p>
            </div>
            <div className="main-howitworks-items">
              <div className="main-howitworks-items-img">
                <img src="/assets/img/cart.png" alt="" />
              </div>
              <p>
                Order online in minutes and install easily with our installation
                service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sort-by-room">
        <div className="carosel-box">
          <h2>Room Blinds</h2>
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={24}
            slidesPerView={"auto"}
            grabCursor={true}
            navigation
          >
            <SwiperSlide>
              <Link to="/blindlist">
                <div className="carosl-slide-items">
                  <div className="carosl-slide-items-img">
                    <img src="/assets/img/bathroom-b.jpg" alt="" />
                  </div>
                  <div className="carosl-slide-items-heading">Bathroom</div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/blindlist">
                <div className="carosl-slide-items">
                  <div className="carosl-slide-items-img">
                    <img src="/assets/img/badroom-b.webp" alt="" />
                  </div>
                  <div className="carosl-slide-items-heading">Bedroom</div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/blindlist">
                <div className="carosl-slide-items">
                  <div className="carosl-slide-items-img">
                    <img src="/assets/img/kitchen-b.jpg" alt="" />
                  </div>
                  <div className="carosl-slide-items-heading">Kitchen</div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/blindlist">
                <div className="carosl-slide-items">
                  <div className="carosl-slide-items-img">
                    <img src="/assets/img/Conservatory-b.jpeg" alt="" />
                  </div>
                  <div className="carosl-slide-items-heading">Conservatory</div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/blindlist">
                <div className="carosl-slide-items">
                  <div className="carosl-slide-items-img">
                    <img src="/assets/img/office-b.jpg" alt="" />
                  </div>
                  <div className="carosl-slide-items-heading">Office</div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/blindlist">
                <div className="carosl-slide-items">
                  <div className="carosl-slide-items-img">
                    <img src="/assets/img/living-b.jpg" alt="" />
                  </div>
                  <div className="carosl-slide-items-heading">Living Room</div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <HowToMassure />
      <div className="sort-by-room">
        <div className="carosel-box">
          <h2>Type Of Blinds</h2>
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={24}
            slidesPerView={"auto"}
            grabCursor={true}
            navigation
          >
            <SwiperSlide>
              <Link to="/blindlist/Wooden">
                <div className="carosl-slide-items">
                  <div className="carosl-slide-items-img">
                    <img src="/assets/img/t-wooden.jpg" alt="" />
                  </div>
                  <div className="carosl-slide-items-heading">
                    Wooden Blinds
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/blindlist/Roller">
                <div className="carosl-slide-items">
                  <div className="carosl-slide-items-img">
                    <img src="/assets/img/t-roller.jpg" alt="" />
                  </div>
                  <div className="carosl-slide-items-heading">
                    Roller Blinds
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/blindlist/patricia">
                <div className="carosl-slide-items">
                  <div className="carosl-slide-items-img">
                    <img src="/assets/img/t-Patricia.jpg" alt="" />
                  </div>
                  <div className="carosl-slide-items-heading">
                    {" "}
                    Patricia Blinds
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/blindlist/Daynnight">
                <div className="carosl-slide-items">
                  <div className="carosl-slide-items-img">
                    <img src="/assets/img/t-daynight.webp" alt="" />
                  </div>
                  <div className="carosl-slide-items-heading">
                    Day & Nighty Blinds
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/blindlist/Roman">
                <div className="carosl-slide-items">
                  <div className="carosl-slide-items-img">
                    <img src="/assets/img/t-Roman.jpg" alt="" />
                  </div>
                  <div className="carosl-slide-items-heading">Roman Blinds</div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/blindlist/Vertical">
                <div className="carosl-slide-items">
                  <div className="carosl-slide-items-img">
                    <img src="/assets/img/t-Vertical.jpg" alt="" />
                  </div>
                  <div className="carosl-slide-items-heading">
                    Vertical Blinds
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="main-quality">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="inner-quality-container">
                <div className="inner-quality-box">
                  <h4>The Perfect Fit</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="overlat_num">01</div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="inner-quality-container">
                <div className="inner-quality-box">
                  <h4>Next Day Dispatch Available</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="overlat_num">02</div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="inner-quality-container">
                <div className="inner-quality-box">
                  <h4>5 Year Quality Guarantee</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="overlat_num">03</div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="inner-quality-container">
                <div className="inner-quality-box">
                  <h4>Installation Service</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="overlat_num">04</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LatestBliendCollaction />
      <div className="footer-container">
        <div className="subscribe-for-update">
          <h2>Subscribe For Newsletter</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="subscribe-inpiut">
            <input
              type="email"
              className="searchbox"
              placeholder="Enter your email address"
            />
            <div className="search-icon">
              <span>Sign Up</span>
            </div>
          </div>
        </div>
        <div className="main-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
