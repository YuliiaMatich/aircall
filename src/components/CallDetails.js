import React from "react";
import "./CallDetails.css";
import axios from 'axios';

const api = axios.create({
  baseURL:
    "https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/",
});



const CallDetails = ({ callInfo }) => {
  const handleArchiveClick = (event, id, bool) => {
    event.preventDefault();
    api.post(`/activities/${id}`,
    {
      is_archived: bool
    })
    .then(response => console.log(response))
    .then(() => bool ? event.target.innerHTML = 'Added to archive!' : event.target.innerHTML = 'Removed from archive!')
  }

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
      {!callInfo.is_archived ? <button onClick={(event) => handleArchiveClick(event, callInfo.id, true)}>Archive the call</button> : <button onClick={(event) => handleArchiveClick(event, callInfo.id, false)}>Unarchive the call</button>}
    </div>
  );
};

export default CallDetails;
