import React from "react";
import CallItem from "./CallItem";

const CallsList = props => {
  return (
    props.callsHistory.map((call) => (
      <CallItem
        key={call.id}
        type={call.call_type}
        direction={call.direction}
        from={call.from}
        to={call.to}
        date={call.created_at}
      />
    ))
  )
}

export default CallsList;