import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutfun } from "../redux/apiCalls";
function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const despatch = useDispatch();
  const handlelogout = async (e) => {
    e.preventDefault();
    await logOutfun(despatch);
    window.location.href = "/";
  };

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);
  return (
    <nav className={`navbar-wrapper `}>
      <div className={`fixedcalss ${scroll ? "fixed" : ""}`}>
        <div className={`navbar navbar-expand-lg flex-column`}>
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
            <div className="col-md-6 justfy-content-left d-flex">
              <input
                type="text"
                className="searchbox"
                placeholder="Search For Products"
              />
              <div className="search-icon">
                <img src="/assets/img/search-i.png" alt="" />
              </div>
            </div>
            <div className="d-block col-md-4">
              <div className="d-flex justify-content-end">
                <div className="paymentimage-container">
                  <img src="/assets/img/headerimg.jpg" alt="" />
                </div>
                <div className="usericon">
                  {user ? (
                    <div className="after-login-account-box">
                      <div className="account-icon">
                        <img src="/assets/img/user-i.png" alt="" />
                      </div>
                      <div className="after-loginsystam">
                        <ul>
                          <li className="usernaem-box">Hey, {user.username}</li>
                          {/* <li className="mb-2">
                            <Link to="/yourorder">
                              <button className="logoutbtn">Your Order</button>
                            </Link>
                          </li> */}
                          <li>
                            <button
                              className="logoutbtn"
                              onClick={handlelogout}
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link to="/login">
                      <div className="account-icon">
                        <img src="/assets/img/user-i.png" alt="" />
                      </div>
                    </Link>
                  )}
                </div>
                <div>
                  <Link to="/cart">
                    <div className="account-icon d-flex">
                      <img src="/assets/img/cart-i.png" alt="" />
                      <div className="floatinfnumber">
                        <p className="mb-0 pb-0 ">{quantity}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-end">
                  <img
                    src="/assets/img/call-i.png"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <span className="call-number">
                    <a href="tel: 0793 207 4018">0793 207 4018</a>
                    {" / "}
                    <a
                      href="tel: 0203
                      384 0074"
                    >
                      0203 384 0074
                    </a>
                  </span>
                </div>
              </div>
              <div>
                <p className=" m-0" style={{ textAlign: "right" }}>
                  Monday-saturday: 10 am-7 pm
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" navigation  dropdwnmenu ">
          <div className="nav-item-top">
            <Link to="/" className="mainlink">
              <p className="navmanuname">Home</p>
            </Link>
          </div>
          <div className="nav-item-top">
            <p className="navmanuname">shop</p>
          </div>
          <div className="nav-item-top">
            <p className="navmanuname">Blinds</p>
            <div className="nav-submenu-wrap">
              <div className="containe py-4">
                <p className="mainhading-afterdowpdown">
                  Various Categories of Blinds
                </p>
                <div className="subnameny-items-container">
                  <Link to="/blindlist/Wooden">
                    <div className="subnameny-items">
                      <div className="subnav-img-container">
                        <img src="/assets/img/t-wooden.jpg" alt="" />
                      </div>
                      <p className="w-100">Wooden</p>
                    </div>
                  </Link>
                  <Link to="/blindlist/Roller">
                    <div className="subnameny-items">
                      <div className="subnav-img-container">
                        <img src="/assets/img/t-Roller.jpg" alt="" />
                      </div>
                      <p className=" w-100">Roller</p>
                    </div>
                  </Link>
                  <Link to="/blindlist/patricia">
                    <div className="subnameny-items">
                      <div className="subnav-img-container">
                        <img src="/assets/img/t-Patricia.jpg" alt="" />
                      </div>
                      <p className=" w-100">Patricia</p>
                    </div>
                  </Link>
                  <Link to="/blindlist/Daynnight">
                    <div className="subnameny-items">
                      <div className="subnav-img-container">
                        <img src="/assets/img/t-daynight.webp" alt="" />
                      </div>
                      <p className=" w-100">Day & Nighty Blinds</p>
                    </div>
                  </Link>
                  <Link to="/blindlist/Roman">
                    <div className="subnameny-items">
                      <div className="subnav-img-container">
                        <img src="/assets/img/t-Roman.jpg" alt="" />
                      </div>
                      <p className=" w-100">Roman</p>
                    </div>
                  </Link>
                  <Link to="/blindlist/Vertical">
                    <div className="subnameny-items">
                      <div className="subnav-img-container">
                        <img src="/assets/img/t-Vertical.jpg" alt="" />
                      </div>
                      <p className=" w-100">Vertical</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-item-top">
            <p className="navmanuname">contact us </p>
          </div>
          <div className="nav-item-top">
            <p className="navmanuname">about us</p>
          </div>
          <div className="nav-item-top">
            <p className="navmanuname">track your order </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
