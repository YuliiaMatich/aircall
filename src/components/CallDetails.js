import React from "react";
import "./CallDetails.css";

const CallDetails = ({callInfo}) => {
  let imgPath;
  if (callInfo.call_type === "missed") {
    imgPath = "/docs/images/missed.png";
  } else if (callInfo.direction === "inbound") {
    imgPath = "/docs/images/inbound.png";
  } else {
    imgPath = "/docs/images/outbound.png";
  }
  let ts = new Date(callInfo.created_at);
  let callTime = ts.toLocaleDateString("en-US", {
    year: 'numeric', month: 'short', day: 'numeric', hour: "2-digit",
    minute: "2-digit"
  });
  return (
    <div className="call-container-details">
      <div className="icon-and-phone-numbers">
        <div className="phone-icon">
          <img className="phone-img" src={imgPath}></img>
        </div>
        <div className="phone-numbers-detail">
          <div className="incoming-phone-number">
            <p>{callInfo.from}</p>
          </div>
          <p>tried to call on {callInfo.to}</p>
        </div>
      </div>
      <p>{callTime}</p>
    </div>
  );
}

export default CallDetails;