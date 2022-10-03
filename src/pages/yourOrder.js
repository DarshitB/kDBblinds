import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar";
import { publicRequest, userRequest } from "../requestMethods";

function YourOrder() {
  const [orders, setorders] = useState();

  const user = useSelector((state) => state.user.currentUser);
  const id = user._id;
  useEffect(() => {
    const getorder = async () => {
      try {
        const res = await userRequest.get("/orders/find/" + id);
        setorders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getorder();
  }, [id]);
  console.log(orders);
  return (
    <>
      <div className="Your-order-wrapper">
        <Navbar />
        <div className="Your-all-order">
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-8">
                {orders.map((order) => (
                  <div className="product-wraper">
                    <div className="order-id-n-dtiles">
                      <p className="mb-0 mr-3">
                        <span>Order Id : </span>
                        {order._id}
                      </p>{" "}
                      <p className="m-0">
                        <span>Status : </span>
                        {order.Status}
                      </p>
                    </div>
                    <hr className="m-0" />
                    <div className="all-products-orderd">
                      {order.produts.map((producto) => (
                        <div>{producto.productId}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YourOrder;
