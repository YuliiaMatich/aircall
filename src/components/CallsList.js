import React from "react";
import axios from 'axios';
import CallItem from "./CallItem";
import { useNavigate } from "react-router-dom";

const api = axios.create({
  baseURL:
    "https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/",
});

const CallsList = props => {
  const navigate = useNavigate();
  const handleClick = (event,id) => {
    event.preventDefault();
    api.get(`/activities/${id}`)
    .then((response) => props.setCallInfo(response.data))
    .then(() => navigate(`/calls/${id}`))
  }

  return (
    props.callsHistory.map((call) => (
      <CallItem
        key={call.id}
        type={call.call_type}
        direction={call.direction}
        from={call.from}
        to={call.to}
        date={call.created_at}
        onClick={(event) => handleClick(event, call.id)}
      />
    ))
  )
}

export default CallsList;