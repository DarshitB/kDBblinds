import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import LatestBliendCollaction from "../components/LatestBliendCollaction";
import Navbar from "../components/navbar";
import { Navigation, A11y, Autoplay } from "swiper";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import HowToMassure from "../components/HowToMassure";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
function Products() {
  const [Lessminwidth, setLessminwidth] = useState(false);
  const [Lessmindrop, setLessmindrop] = useState(false);
  const handleNumbers = (e) => {
    const value = e.target.value;
    const getClass = e.target.className;
    if (getClass === "searchbox width") {
      if (value < 400) {
        setLessminwidth(true);
      } else {
        setLessminwidth(false);
      }
    } else if (getClass === "searchbox Drop") {
      if (value < 400) {
        setLessmindrop(true);
      } else {
        setLessmindrop(false);
      }
    }
  };
  const [ShowOption, setShowOption] = useState(true);
  const ShowmoreOption = () => {
    setShowOption(false);
  };
  const ShowlessOption = () => {
    setShowOption(true);
  };
  (function () {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    Date.prototype.getDayName = function () {
      return days[this.getDay()];
    };
  })();
  const current = new Date();
  const month = current.toLocaleString("default", { month: "short" });
  const date = current.getDate() + 1;
  const dayname = current.getDayName();
  const delivarydate = date + " " + month + "," + dayname;

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState([]);
  const [BliendPrice, setBliendPrice] = useState(0);
  const [InitialPrice, setInitialPrice] = useState(0);

  useEffect(() => {
    const getProdcut = async () => {
      try {
        const res = await publicRequest.get("/product/find/" + id);
        setProduct(res.data);
        setBliendPrice(res.data.price);
        setInitialPrice(res.data.price);
      } catch (err) {
        console.log(err);
      }
    };
    getProdcut();
  }, [id]);

  const [Qtyvalue, setQutyvalue] = useState(1);
  const increasqty = () => {
    setQutyvalue(Qtyvalue + 1);
  };
  const Deincreasqty = () => {
    if (Qtyvalue > 1) {
      setQutyvalue(Qtyvalue - 1);
    }
  };

  const [fitting, setFitting] = useState({});
  const handaleFitting = (e) => {
    const { id, checked } = e.target;
    setFitting({ OptionName: "Fitting Option", optionData: id + " Brackets" });
  };
  const [Size, setSize] = useState({});
  const handaleSize = (e) => {
    const { id, checked } = e.target;
    setSize({ OptionName: "Size Option", optionData: id + " Size" });
  };
  const [Control, setControl] = useState({});
  const handaleControl = (e) => {
    const { id, checked } = e.target;
    setControl({ OptionName: "Control Option", optionData: id + " Side" });
  };
  const [Cassette, setCassette] = useState({});
  const handaleCassette = (e) => {
    const { id, checked } = e.target;
    setCassette({
      OptionName: "Cassette Option",
      optionData: id + " Cassette",
    });
  };

  const [cartbtndisable, setCartbtndisable] = useState(true);
  const [width, setwidth] = useState(0);
  const [drop, setdrop] = useState(0);
  const handelIsNull = (e) => {
    const width = document.getElementsByClassName("width")[0].value;
    setwidth(width);
    const drop = document.getElementsByClassName("Drop")[0].value;
    setdrop(drop);
    if (
      width === null ||
      width === undefined ||
      width === "" ||
      width < 400 ||
      drop === null ||
      drop === undefined ||
      drop === "" ||
      drop < 400
    ) {
      setCartbtndisable(true);
    } else {
      const widthdrop = width * drop;
      const newprice = (widthdrop * InitialPrice) / 160000;
      setBliendPrice(parseFloat(newprice.toFixed(2)));
      setCartbtndisable(false);
    }
  };

  const dispatch = useDispatch();
  const min = 1;
  const max = 5000;
  const randomnumber =
    Math.floor(Math.random() * (max - min + 1)) + product._id;
  const handeladdcart = (e) => {
    e.preventDefault();
    if (width >= 400 && drop >= 400) {
      dispatch(
        addProduct({
          ...product,
          Qtyvalue,
          BliendPrice,
          randomnumber,
          width,
          drop,
          fitting,
          Size,
          Control,
          Cassette,
        })
      );
      setShowOption(true);
    }
  };

  const srolllocation = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [srolllocation]);

  return (
    <>
      <div className="product-detailes-page-wrapper">
        <Navbar />
        <section className="section-pagetop">
          <div className="container-fluid mainhedof-productlist">
            <Link to="/" className="home-redirector">
              Home
            </Link>{" "}
            &nbsp; / &nbsp;
            <Link className="home-redirector" to="/blindlist">
              Blinds
            </Link>
            &nbsp; / &nbsp;
            <Link className="home-redirector" to={`/blindlist/${product.type}`}>
              {product.type}
            </Link>
            &nbsp; / &nbsp;
            <span>{product.title}</span>
          </div>
        </section>
        <div className="main-product-detailes">
          <div className="image-container-box">
            <div className="image-containers">
              <Swiper
                modules={[Navigation, A11y, Autoplay]}
                slidesPerView={1}
                speed={1200}
                navigation
                autoplay={{ delay: 5000 }}
                loop={true}
              >
                <SwiperSlide>
                  <div className="productpage-imagesbox">
                    <img src={`/assets/img/${product.img}`} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="productpage-imagesbox">
                    <img src="/assets/img/slide-interior-1.jpg" alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="masurment-detailes-box">
            <div className="massuement-details">
              <div className="main-heading-blind-prodcut">
                <h2 className="m-0">{product.title}</h2>
                <p className="m-0">{product.type} Blind</p>
              </div>
              {/* <div className="price-wrap my-3">
                <span className="price-old">Start from &nbsp;</span>
                <span className="price">£12.80</span> &nbsp;
                <del className="price-old">£19.80</del>
              </div> */}
              <div className="massurmensts-ofbriends">
                <form onSubmit={handeladdcart}>
                  <div className="inner-massurmensts-ofbriends">
                    <h5 className="mb-3">Enter Your Measurement</h5>
                    <div className="d-flex">
                      <div className="heading-enter-width">
                        <span>Enter your Width (In MM)</span>
                        <input
                          type="number"
                          onBlur={handleNumbers}
                          onChange={handelIsNull}
                          onWheel={(e) => e.target.blur()}
                          className="searchbox width"
                          placeholder="Min: 400"
                          style={{
                            borderColor: Lessminwidth
                              ? "red"
                              : "rgb(230, 230, 230)",
                          }}
                          required
                        />
                      </div>
                      <div className="heading-enter-Drop">
                        <span>Enter your Drop (In MM)</span>
                        <input
                          type="number"
                          className="searchbox Drop"
                          onBlur={handleNumbers}
                          onChange={handelIsNull}
                          onWheel={(e) => e.target.blur()}
                          style={{
                            borderColor: Lessmindrop
                              ? "red"
                              : "rgb(230, 230, 230)",
                          }}
                          placeholder="Min: 400"
                          required
                        />
                      </div>
                    </div>
                    <div className={`more-options ${ShowOption ? "" : "show"}`}>
                      <h5 className="my-3">Fitting Option</h5>
                      <div className="d-flex">
                        <div className="Brackets-box">
                          <input
                            type="radio"
                            id="ceiling"
                            name="Brackets"
                            onChange={handaleFitting}
                            required
                          />
                          <label htmlFor="ceiling">Ceiling Brackets</label>
                        </div>
                        <div className="Brackets-box">
                          <input
                            type="radio"
                            id="wall"
                            name="Brackets"
                            onChange={handaleFitting}
                            required
                          />
                          <label htmlFor="wall">wall Brackets</label>
                        </div>
                      </div>
                      <h5 className="my-3">Size Option</h5>
                      <div className="d-flex">
                        <div className="Brackets-box">
                          <input
                            type="radio"
                            id="Recess"
                            name="sizes"
                            onChange={handaleSize}
                            required
                          />
                          <label htmlFor="ceiling">Recess sizes</label>
                        </div>
                        <div className="Brackets-box">
                          <input
                            type="radio"
                            id="Exact"
                            name="sizes"
                            onChange={handaleSize}
                            required
                          />
                          <label htmlFor="wall">Exact sizes</label>
                        </div>
                      </div>
                      <h5 className="my-3">Control Option</h5>
                      <div className="d-flex">
                        <div className="Brackets-box">
                          <input
                            type="radio"
                            id="Left"
                            name="Side"
                            onChange={handaleControl}
                            required
                          />
                          <label htmlFor="ceiling">Left Side</label>
                        </div>
                        <div className="Brackets-box">
                          <input
                            type="radio"
                            id="Right"
                            name="Side"
                            onChange={handaleControl}
                            required
                          />
                          <label htmlFor="wall">Right Side</label>
                        </div>
                      </div>
                      <h5 className="my-3">Cassette Option</h5>
                      <div className="d-flex">
                        <div className="Brackets-box">
                          <input
                            type="radio"
                            id="Open"
                            name="Cassette"
                            onChange={handaleCassette}
                            required
                          />
                          <label htmlFor="ceiling">Open Cassette</label>
                        </div>
                        <div className="Brackets-box">
                          <input
                            type="radio"
                            id="Closed"
                            name="Cassette"
                            onChange={handaleCassette}
                            required
                          />
                          <label htmlFor="wall">Closed Cassette</label>
                        </div>
                      </div>
                    </div>
                    {ShowOption ? (
                      <p
                        className="text-center m-0 show-more"
                        onClick={ShowmoreOption}
                      >
                        Show More Option
                      </p>
                    ) : (
                      <p
                        className="text-center m-0 show-more"
                        onClick={ShowlessOption}
                      >
                        Show Less Option
                      </p>
                    )}
                  </div>
                  <div className="d-flex align-items-end mt-3">
                    <div className="price-delevary-option">
                      <p className="m-0">Estimated Delivery Date:</p>
                      <p className="delivarydate m-0">{delivarydate}</p>
                    </div>
                    <div className="price-delevary-option">
                      <p className="m-0 pricehaed">Your Price</p>
                      <div className="price-wrap ">
                        <del className="price-old">£19.80</del> &nbsp;
                        <span className="price">£{BliendPrice}</span>
                      </div>
                    </div>
                  </div>
                  <div className="add-tocart-btn">
                    <div className="d-flex align-items-center w-50">
                      <p className="m-0 qtyhead">Qty.</p>
                      <button
                        type="button"
                        onClick={Deincreasqty}
                        className="qty-plus-btns"
                      >
                        -
                      </button>
                      <input
                        type="type"
                        className="qty-number-box"
                        min="1"
                        value={Qtyvalue}
                      />
                      <button
                        type="button"
                        onClick={increasqty}
                        className="qty-minus-btns"
                      >
                        +
                      </button>
                    </div>
                    <div className="w-50">
                      <button
                        className="add-btn"
                        onClick={() => setShowOption(false)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="other-detiles-blinds">
            <div
              className="main-quality"
              style={{
                paddingLeft: "0px",
                paddingRight: "0px",
                paddingTop: "2rem",
              }}
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <div className="inner-quality-container">
                      <div className="inner-quality-box">
                        <h4>The Perfect Fit</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="inner-quality-container">
                      <div className="inner-quality-box">
                        <h4>Next Day Dispatch Available</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="inner-quality-container">
                      <div className="inner-quality-box">
                        <h4>5 Year Quality Guarantee</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <HowToMassure />
            <div className="free-samples">
              <h4>order your favorite basic sample</h4>
              <button className="sample-order-btn">Order Free Sample</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Products;
