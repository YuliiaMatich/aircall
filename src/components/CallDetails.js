import React, { useState } from "react";
import "./CallDetails.css";

const CallDetails = ({ callInfo }) => {
  let ts = new Date(callInfo.created_at);
  let callTime = ts.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="call-container-details">
      <div className="image-and-phone-number-group">
        <img className="caller-img" src="/docs/images/user1.png"></img>
        <div className="phone-numbers-detail">
          <p className="call-info-from">{callInfo.from}</p>
          <p>tried to call on {callInfo.to}</p>
        </div>
      </div>
      <p>{callInfo.call_type[0].toUpperCase() + callInfo.call_type.slice(1) + " " + callInfo.direction} call</p>
      <p>{callTime}</p>
      <p>
        {callInfo.is_archived
          ? "This call is archived"
          : "This call is not archived"}
      </p>
    </div>
  );
};

export default CallDetails;
