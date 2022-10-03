import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { emptyCart } from "../redux/cartRedux";
function Success() {
  const location = useLocation();
  const paypal = location.state.paypalData;
  const cart = location.state.order;
  const user = useSelector((state) => state.user.currentUser);
  const token = user.accessToken;
  const config = {
    headers: { token: `Bearer ${token}` },
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const createorder = async () => {
      try {
        const res = await axios.post(
          //"http://localhost:5000/api/orders",
          "https://apiserverkdb.herokuapp.com/api/orders",
          cart,
          config
        );
        if (res.status === 200) {
          const cartempty = dispatch(emptyCart());
        }
      } catch (err) {
        console.log(err);
      }
    };
    cart && createorder();
  }, [paypal, cart]);
  return (
    <div>
      <div className="sucess-header">
        <img src="/assets/img/logobgw.png" className="sucess-logo" alt="" />
      </div>
      <div className="ordrder-confirmation">
        <div className="container-fluid px-5 py-4">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8">
              <div className="order-confirmd-box">
                <img
                  className="loading-image"
                  src="/assets/img/confirm-order.gif"
                />
                <h1 className="text-center">Your Order is Confirmed.</h1>
                <h5 className="text-center">thank you for your purchesing!</h5>
                <Link to="/blindlist">Continue Shopping</Link>
              </div>
              <div className="product-detailes">
                <div className="product-main-detailes">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="order-detailes">
                        <span>order Date</span>
                        <p>{cart.orderDate}</p>
                      </div>
                    </div>
                    {/* <div className="col-md-3">
                      <div className="order-detailes">
                        <span>order Id</span>
                        <p>{cart.orderDate}</p>
                      </div>
                    </div> */}
                    <div className="col-md-4">
                      <div className="order-detailes">
                        <span>payment method</span>
                        <p>{cart.paymentMethod}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="order-detailes">
                        <span>shipping address</span>
                        <p>{cart.userAddress[0].Address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
