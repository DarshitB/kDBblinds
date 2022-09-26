import React, { useState } from "react";
import Calendar from "react-calendar";

function Model({ closemodel, modelheading, areaname, setapointdate }) {
  const handelclose = () => {
    closemodel(false);
    document.body.style.overflow = "unset";
  };
  const [selectedDate, setSelecteddate] = useState(new Date());
  const selecteddate = selectedDate.getDate();
  const selectedmonth = selectedDate.toLocaleString("default", {
    month: "short",
  });
  const dayname = selectedDate.getDayName();
  const handledates = () => {
    setapointdate(
      "( " + selecteddate + " " + selectedmonth + ", " + dayname + " )"
    );
    closemodel(false);
    document.body.style.overflow = "unset";
  };
  return (
    <>
      <div className="model-wrapper">
        <div className="model-container">
          <div className="model-box">
            <div className="model-heade">
              <div>
                <h5 className="m-0">{modelheading}</h5>
                <p className="staetname-heading m-0">
                  Selected Area - {areaname}
                </p>
              </div>
              <p className="close-btn" onClick={handelclose}>
                x
              </p>
            </div>
            <div className="model-body">
              <Calendar
                minDate={new Date()}
                value={selectedDate}
                onChange={setSelecteddate}
              />
            </div>
            <div className="model-footer">
              <p className="m-0">
                {selecteddate + " " + selectedmonth + ", " + dayname}
              </p>
              <button className="confirm-btn" onClick={handledates}>
                Appoint
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Model;
