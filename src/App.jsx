import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from "./Header.jsx";
import Footer from "./components/Footer.js";
import CallsList from "./components/CallsList.js";

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
    <BrowserRouter>
    <div className="container">
      <div className="group-header-and-callitem">
      <Header />
      <div className="container-view">
        {!callsHistory
          ? "Loading..."
          : 
          <Routes>
            <Route path="/" element={<CallsList callsHistory={callsHistory}/>}/>
            <Route path="/archived" element={<CallsList callsHistory={callsHistory.filter(call => call.is_archived === true)}/>}/>
            <Route path="/missed" element={<CallsList callsHistory={callsHistory.filter(call => call.call_type === "missed")}/>}/>
          </Routes>
          }
            </div>    
      </div>
      <Footer /> 
    </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
