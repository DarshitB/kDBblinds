import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-box">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="innervalue-of-footer">
                  <h5>Need help?</h5>
                  <ul>
                    <li>Help & FAQs</li>
                    <li>Delivery</li>
                    <li>Warranty</li>
                    <li>Delivery & collection</li>
                    <li>Returns & refunds</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="innervalue-of-footer">
                  <h5>How to Guides</h5>
                  <ul>
                    <li>How to Measure</li>
                    <li>How to Install</li>
                    <li>How to Set Up Electric Blinds</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="innervalue-of-footer">
                  <h5>About us</h5>
                  <ul>
                    <li>Careers</li>
                  </ul>
                  <h5 className="mt-5">Terms & Policy</h5>
                  <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="innervalue-of-footer">
                  <h5>Customer service</h5>
                  <div className="d-flex align-items-center pb-3">
                    <img
                      src="/assets/img/call-i.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <span className="call-number">
                      <a href="tel: 0793 207 4018">0793 207 4018</a> <br />{" "}
                      <a
                        href="tel: 0203
                      384 0074"
                      >
                        0203 384 0074
                      </a>
                    </span>
                  </div>
                  <p>
                    <strong>WE ARE OPEN</strong> <br />
                    Mon-Sat: 10 am-7 pm
                  </p>
                  <div className="logodiv-footer">
                    <a className="navbar-brand" href="/">
                      <img
                        src="/assets/img/logobgw.png"
                        className="navbar-logo"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="d-flex pt-4">
                  <div className="border w-50 py-3">
                    <div className="text-center h-100 d-flex align-items-center justify-content-center">
                      <p className="m-0">
                        © KBD Blinds {new Date().getFullYear()}, All Rights
                        Reserved. <br /> 15 Western Gateway, London E16 1AP, UK
                      </p>
                      {/*  <a className="m-0">Terms & Conditions</a>{" "}
                      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                      <a className="m-0">Privacy Policy</a> */}
                    </div>
                  </div>
                  <div className="border w-50 py-3">
                    <h5 className="text-center m-0">Follow us</h5>
                    <div className="follow-us d-flex justify-content-center">
                      <img src="/assets/img/fb-i.png" />
                      <img src="/assets/img/youtube-i.png" />
                      <img src="/assets/img/twitter-i.png" />
                      <img src="/assets/img/wp-i.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
