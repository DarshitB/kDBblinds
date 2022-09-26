import React from "react";
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
  return (
    <>
      <nav className="navbar navbar-expand-lg flex-column">
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
          <div className="col-md-2"></div>
          <div className="mr-auto d-flex col-md-2">
            <div>
              {user ? (
                <div className="after-login-account-box">
                  <div className="account-icon">
                    <img src="/assets/img/user-i.png" alt="" />
                  </div>
                  <div className="after-loginsystam">
                    <ul>
                      <li className="usernaem-box">Hey, {user.username}</li>
                      <li>
                        <button className="logoutbtn" onClick={handlelogout}>
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
            <div className="account-icon d-flex">
              <img src="/assets/img/sample-i.png" alt="" />
              <p className="mb-0 pb-0">0</p>
            </div>
            <div>
              <Link to="/cart">
                <div className="account-icon d-flex">
                  <img src="/assets/img/cart-i.png" alt="" />
                  <p className="mb-0 pb-0">{quantity}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <nav className=" navigation  dropdwnmenu ">
        <div className="nav-item-top">
          <p className="navmanuname">Blinds Category</p>
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
          <p className="navmanuname">Blinds colors</p>
          <div className="nav-submenu-wrap">
            <div className="containe py-4">
              <p className="mainhading-afterdowpdown">
                Various colors of Blinds
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
