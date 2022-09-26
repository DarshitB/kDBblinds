import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, decreaseCart, increaseCart } from "../redux/cartRedux";
import Model from "../components/model";
function Cart() {
  const cart = useSelector((state) => state.cart);

  const [ViewD, setViewD] = useState({});
  const viewDetailes = (e) => {
    const proId = e.target.name;
    const perticulerpid = e.target.id;
    setViewD({
      perpro: perticulerpid,
    });
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
  const nextDayDate = current.getDate() + 2;
  const standardDate = current.getDate() + 4;
  const dayname = current.getDayName();

  const [delivarydate, setDelivarydate] = useState(
    standardDate + " " + month + "," + dayname
  );
  const [delivaryname, setDelivaryname] = useState("Standard Delivery");
  const [delivarycost, setDelivarycost] = useState(7.99);
  const [totalcost, setTotalcost] = useState(
    (delivarycost + cart.total).toFixed(2)
  );

  const [instalcheck, setInstallcheck] = useState(false);
  const [Installationcost, setInstallationcost] = useState(0);
  const handleinstal = () => {
    setInstallcheck(!instalcheck);
    if (instalcheck === false) {
      setInstallationcost(19.99);
      setTotalcost((parseFloat(totalcost) + 19.99).toFixed(2));
    } else {
      setInstallationcost(0);
      setTotalcost((parseFloat(totalcost) - 19.99).toFixed(2));
    }
  };

  const [Installationapointdate, setInstallationapointdate] = useState();

  const [Installationname, setInstallationname] = useState("");
  const [openmodel, setopenmodel] = useState(false);
  const hanlearea = (e) => {
    const areaname = e.target.id;
    if (areaname !== "none") {
      setInstallationname(areaname);
      setopenmodel(true);
      document.body.style.overflow = "hidden";
    } else {
    }
  };

  const delivarymethod = (e) => {
    const value = e.target.value;
    if (value === "Standard Delivery") {
      setDelivaryname(value);
      setDelivarycost(7.99);
      var totalpri = 7.99 + cart.total + Installationcost;
      setTotalcost(totalpri.toFixed(2));
      setDelivarydate(standardDate + " " + month + "," + dayname);
    } else if (value === "Next Day Dispatch") {
      setDelivaryname(value);
      setDelivarycost(14.99);
      var totalpri2 = 14.99 + cart.total + Installationcost;
      setTotalcost(totalpri2.toFixed(2));
      setDelivarydate(nextDayDate + " " + month + "," + dayname);
    }
  };

  const srolllocation = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [srolllocation]);
  const dispatch = useDispatch();
  const handaledelproduct = (producttodel) => {
    dispatch(removeProduct(producttodel));
  };

  const handelDecreas = (productwhole) => {
    const minus = dispatch(decreaseCart(productwhole));
    if (minus) {
      if (minus.payload.Qtyvalue > 1) {
        setTotalcost(
          (
            cart.total -
            minus.payload.BliendPrice +
            delivarycost +
            Installationcost
          ).toFixed(2)
        );
      }
    }
  };
  const handleIncrease = (productwhole) => {
    const plus = dispatch(increaseCart(productwhole));
    if (plus) {
      setTotalcost(
        (
          cart.total +
          plus.payload.BliendPrice +
          delivarycost +
          Installationcost
        ).toFixed(2)
      );
    }
  };

  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <div className="caret-main-wapper">
        <div className="navbar navbar-expand-lg flex-column">
          <div className="topNav row">
            <div className="logodiv col-md-2">
              <Link className="navbar-brand" to="/">
                <img
                  src="/assets/img/logobgw.png"
                  className="navbar-logo"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="top-div-shoping-cart">
          <section className="section-pagetop">
            {cart.total === 0 ? (
              <div
                className="container-fluid mainhedof-productlist d-flex flex-column justify-content-center align-items-center"
                style={{ height: "80vh" }}
              >
                <h2>There is no Product in Cart Add Some...</h2>
                <Link to="/blindlist" className="noproductincart">
                  Add some Blinds to cart
                </Link>
              </div>
            ) : (
              <div className="container-fluid mainhedof-productlist">
                <h2>Sopping Cart</h2>
              </div>
            )}
          </section>
          {cart.total !== 0 ? (
            <div className="container-fluid shopingcartdetailes">
              <div className="row">
                <div className="col-md-8">
                  <div className="login-detiles login-a">
                    <div className="w-75">
                      <h4>Login</h4>
                      <p className="m-0">
                        {user ? "My Name - " + user.username : ""}
                      </p>
                    </div>
                    <div className="w-25 ">
                      <button className="change-login-btn">
                        {user ? "Change" : "Login"}
                      </button>
                    </div>
                  </div>
                  <div className="login-detiles Billing-b">
                    <div className="w-100">
                      <h4>Billing/Shipping Address</h4>
                      <div className="d-flex mt-4 mb-3">
                        <div className="namebox pr-1">
                          <input
                            type="text"
                            className="searchbox"
                            placeholder="First Name"
                            required
                          />
                        </div>
                        <div className="namebox pl-1">
                          <input
                            type="text"
                            className="searchbox"
                            placeholder="Last Name"
                            required
                          />
                        </div>
                      </div>
                      <textarea
                        placeholder="Street Address"
                        className="address-box mb-3"
                        maxlength="255"
                      ></textarea>
                      <div className="d-flex mb-3">
                        <div className="namebox pr-1">
                          <input
                            type="text"
                            className="searchbox"
                            placeholder="Country"
                            value="United Kingdom"
                            required
                          />
                        </div>
                        <div className="namebox pl-1">
                          <input
                            type="text"
                            className="searchbox"
                            placeholder="City"
                            required
                          />
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <div className="namebox pr-1">
                          <input
                            type="text"
                            className="searchbox"
                            placeholder="Postcode"
                            required
                          />
                        </div>
                        <div className="namebox pl-1">
                          <input
                            type="text"
                            className="searchbox"
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="login-detiles Shipping-c">
                    <div className="w-100">
                      <h4>Shipping Method</h4>
                      <div className="d-flex mt-4">
                        <div className="Brackets-box">
                          <input
                            type="radio"
                            id="ceiling"
                            value="Standard Delivery"
                            name="Brackets"
                            onChange={delivarymethod}
                          />
                          <label htmlFor="ceiling">
                            Standard Delivery - £7.99
                          </label>
                        </div>
                        <div className="Brackets-box">
                          <input
                            type="radio"
                            id="wall"
                            name="Brackets"
                            value="Next Day Dispatch"
                            onChange={delivarymethod}
                          />
                          <label htmlFor="wall">
                            Next Day Dispatch - £14.99
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="login-detiles installation-d">
                    <div className="w-100">
                      <h4>Installation Services</h4>
                      <div className=" mt-4">
                        <div className="Brackets-box">
                          <input
                            type="radio"
                            id="installation"
                            name="installation"
                            onClick={handleinstal}
                            checked={instalcheck}
                          />
                          <label htmlFor="ceiling">
                            Click to add blind installation service - £19.99
                          </label>
                        </div>
                        <div
                          className={`Brackets-box instalation-bracket-box ${
                            instalcheck ? "show" : ""
                          }`}
                        >
                          <div
                            className={`instlation-areabox ${
                              instalcheck ? "show" : ""
                            }`}
                          >
                            <div className="mb-3">
                              <p className="select-loc-head m-0">
                                Select Your Area{" "}
                              </p>
                              <span>
                                {Installationapointdate
                                  ? " (Appointment date - " +
                                    Installationapointdate +
                                    " And Area - (" +
                                    Installationname +
                                    "))"
                                  : ""}
                              </span>
                            </div>
                            <div className="instlation-areabox-innerbox">
                              <div className="locatoinselector-box">
                                <input
                                  type="radio"
                                  name="installlocation"
                                  id="Bedfordshire"
                                  onChange={hanlearea}
                                />
                                <label htmlFor="Bedfordshire">
                                  Bedfordshire
                                </label>
                              </div>
                              <div className="locatoinselector-box">
                                <input
                                  type="radio"
                                  name="installlocation"
                                  id="Cambridgeshire"
                                  onChange={hanlearea}
                                />
                                <label htmlFor="Cambridgeshire">
                                  Cambridgeshire
                                </label>
                              </div>
                              <div className="locatoinselector-box">
                                <input
                                  type="radio"
                                  name="installlocation"
                                  id="Staffordshire"
                                  onChange={hanlearea}
                                />
                                <label htmlFor="Staffordshire">
                                  Staffordshire
                                </label>
                              </div>
                              <div className="locatoinselector-box">
                                <input
                                  type="radio"
                                  name="installlocation"
                                  id="Surrey"
                                  onChange={hanlearea}
                                />
                                <label htmlFor="Surrey">Surrey</label>
                              </div>
                              <div className="locatoinselector-box">
                                <input
                                  type="radio"
                                  name="installlocation"
                                  id="Lancashire"
                                  onChange={hanlearea}
                                />
                                <label htmlFor="Lancashire">Lancashire</label>
                              </div>
                              <div className="locatoinselector-box">
                                <input
                                  type="radio"
                                  name="installlocation"
                                  id="London"
                                  onChange={hanlearea}
                                />
                                <label htmlFor="London">London</label>
                              </div>
                              <div className="locatoinselector-box">
                                <input
                                  type="radio"
                                  name="installlocation"
                                  id="Cornwall"
                                  onChange={hanlearea}
                                />
                                <label htmlFor="Cornwall">Cornwall</label>
                              </div>
                              <div className="locatoinselector-box">
                                <input
                                  type="radio"
                                  name="installlocation"
                                  id="none"
                                  onChange={hanlearea}
                                />
                                <label htmlFor="none">none of the above</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="login-detiles Payment-e">
                    <div className="w-100">
                      <h4>Payment Method</h4>
                      <div className="mt-4">
                        <div className="payment-options ">
                          <input type="radio" id="Credit" name="Payment" />
                          <label htmlFor="Credit">
                            {" "}
                            &nbsp;&nbsp;&nbsp;
                            <img
                              src="/assets/img/card-i.svg"
                              alt=""
                              className="caditcardimg"
                            />{" "}
                            &nbsp; Credit Card
                          </label>
                        </div>
                        <div className="payment-options p-0">
                          <input type="radio" id="Paypal" name="Payment" />
                          <label htmlFor="Paypal">
                            {" "}
                            &nbsp;&nbsp;&nbsp;
                            <img
                              src="/assets/img/paypal-i.svg"
                              alt=""
                              className="caditcardimg"
                            />{" "}
                            &nbsp; Paypal
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="login-detiles order-summery-amount">
                    <div className="w-100">
                      <h4>Order Summary</h4>
                      {cart.products.map((product) => (
                        <div>
                          <div className="orderd-items mt-4">
                            <div className="orderd-item-img">
                              <img alt="" src={`/assets/img/${product.img}`} />
                            </div>
                            <div className="order-item-name">
                              <h6 className="m-0">{product.title}</h6>
                              <div className="mt-2 d-flex">
                                <button
                                  onClick={() => handleIncrease(product)}
                                  className="qty-plus-btns"
                                >
                                  +
                                </button>
                                <input
                                  type="type"
                                  value={product.Qtyvalue}
                                  className="qty-number-box"
                                />
                                <button
                                  onClick={() => handelDecreas(product)}
                                  className="qty-minus-btns"
                                >
                                  -
                                </button>
                                <button
                                  className="product-delele-btn"
                                  onClick={() => handaledelproduct(product)}
                                >
                                  <div
                                    className="d-flex justify-content-center align-item-center"
                                    style={{ width: "50px" }}
                                  >
                                    <img src="/assets/img/delet-i.png" alt="" />
                                  </div>
                                </button>
                              </div>
                            </div>
                            <div className="order-items-price">
                              <h6 className="m-0">
                                £
                                {(
                                  product.BliendPrice * product.Qtyvalue
                                ).toFixed(2)}
                              </h6>
                            </div>
                          </div>
                          <div className="order-moredetailes">
                            <div className="blanck-space"></div>
                            <div className="ordermore-detiles">
                              <h6 className="m-0 mb-1">
                                <input
                                  type="button"
                                  value="View Detailes"
                                  className="viewmorebtn"
                                  name={product._id}
                                  onClick={viewDetailes}
                                  id={product.randomnumber}
                                />
                              </h6>
                              {ViewD.perpro === product.randomnumber ? (
                                <p className="m-0 text-capitalize">
                                  <span>Width :</span> {product.width} MM |{" "}
                                  <span>Drop :</span> {product.drop} MM |{" "}
                                  <span>{product.fitting.OptionName} :</span>{" "}
                                  {product.fitting.optionData} |{" "}
                                  <span>{product.Size.OptionName} :</span>{" "}
                                  {product.Size.optionData} |{" "}
                                  <span>{product.Control.OptionName} :</span>{" "}
                                  {product.Control.optionData} |{" "}
                                  <span>{product.Cassette.OptionName} :</span>{" "}
                                  {product.Cassette.optionData}
                                </p>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </div>
                      ))}

                      <hr />
                      <table className="table-of-order-prices">
                        <tr>
                          <th>Sub Total Inc. Vat</th>
                          <td>£{cart.total.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <th>
                            <span>Delivery With</span>
                            <span>{delivaryname}</span>
                          </th>
                          <td>£{delivarycost}</td>
                        </tr>
                        {instalcheck ? (
                          <tr>
                            <th>
                              <span>Installation At</span>
                              <span>
                                {Installationname} {Installationapointdate}
                              </span>
                            </th>
                            <td>£{Installationcost}</td>
                          </tr>
                        ) : (
                          ""
                        )}
                        <tr>
                          <th>
                            <hr />
                          </th>
                          <td>
                            <hr />
                          </td>
                        </tr>
                        <tr className="totalcostbold">
                          <th>
                            <span className="maintotal">Total</span>
                            <span>Estimated Delivery Date:</span>
                            <span className="delivarydate">{delivarydate}</span>
                          </th>
                          <td>£{totalcost}</td>
                        </tr>
                      </table>
                      <div className="button-forplacingorder">
                        <button className="order-pace">Order Place</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <Footer />
        </div>
      </div>
      {openmodel ? (
        <Model
          closemodel={setopenmodel}
          modelheading="Available dates for Installation"
          areaname={Installationname}
          setapointdate={setInstallationapointdate}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Cart;
