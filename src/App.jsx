import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter,useParams } from 'react-router-dom';
import Header from "./Header.jsx";
import Footer from "./components/Footer.js";
import CallsList from "./components/CallsList.js";
import CallDetails from "./components/CallDetails.js";



const api = axios.create({
  baseURL:
    "https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/",
});

const App = () => {
  const [callsHistory, setCallsHistory] = useState(null);
  const [callInfo, setCallInfo] = useState(null);
const {id} = useParams();

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
            <Route path="/" element={<CallsList setCallInfo={setCallInfo} callsHistory={callsHistory}/>}/>
            <Route path="/archived" element={<CallsList setCallInfo={setCallInfo} callsHistory={callsHistory.filter(call => call.is_archived === true)}/>}/>
            <Route path="/missed" element={<CallsList setCallInfo={setCallInfo} callsHistory={callsHistory.filter(call => call.call_type === "missed")}/>}/>
            <Route path="/calls/:id" element={<CallDetails callInfo={callInfo} id={id}/>}/>
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
