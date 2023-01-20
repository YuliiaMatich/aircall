import React from "react";
import "./CallItem.css";

const CallItem = (props) => {
  let imgPath;
  if (props.type === "missed") {
    imgPath = "/docs/images/missed.png";
  } else if (props.direction === "inbound") {
    imgPath = "/docs/images/inbound.png";
  } else {
    imgPath = "/docs/images/outbound.png";
  }
  let ts = new Date(props.date);
  let callTime = ts.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="call-container">
      <div className="icon-and-phone-numbers">
        <div className="phone-icon">
          <img className="phone-img" src={imgPath}></img>
        </div>
        <div className="phone-numbers-detail">
          <div className="incoming-phone-number">
            <p>{props.from}</p>
          </div>
          <p>tried to call on {props.to}</p>
        </div>
      </div>
      <p>{callTime}</p>
    </div>
  );
};

export default CallItem;
