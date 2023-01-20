import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
import CallItem from "./components/CallItem";
import Footer from "./components/Footer.js";

const api = axios.create({
  baseURL:
    "https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/",
});

const App = () => {
  const [callsHistory, setCallsHistory] = useState(null);

  useEffect(() => {
    api.get("/activities").then((response) => setCallsHistory(response.data));
  }, []);

  return (
    <div className="container">
      <div className="group-header-and-callitem">
      <Header />
      <div className="container-view">
        {!callsHistory
          ? "Loading..."
          : callsHistory.map((call) => (
              <CallItem
                key={call.id}
                type={call.call_type}
                direction={call.direction}
                from={call.from}
                to={call.to}
                date={call.created_at}
              />
            ))}
            </div>    
      </div>
      <Footer /> 
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
