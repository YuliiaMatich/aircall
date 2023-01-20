import React from "react";
import "./CallItem.css";

const CallItem = (props) => {
  let imgPath;
  if (props.type === "missed") {
    imgPath = "https://github.com/YuliiaMatich/aircall/blob/master/docs/images/missed.png?raw=true";
  } else if (props.direction === "inbound") {
    imgPath = "https://github.com/YuliiaMatich/aircall/blob/master/docs/images/inbound.png?raw=true";
  } else {
    imgPath = "https://github.com/YuliiaMatich/aircall/blob/master/docs/images/outbound.png?raw=true";
  }
  let ts = new Date(props.date);
  let callTime = ts.toLocaleDateString("en-US", {
    // hour: "2-digit",
    // minute: "2-digit",
    year: 'numeric', month: 'short', day: 'numeric'
  });
  return (
    <div onClick={props.onClick} className="call-container">
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
