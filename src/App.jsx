import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';

const api = axios.create({
  baseURL: "https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/"
});




const App = () => {
  
const [callsHistory, setCallsHistory] = useState(null);

  useEffect(() => {
    api.get("/activities")
     .then(response => setCallsHistory(response.data))
 }, []);

  return (
    <div className='container'>
      <Header/>
      <div className="container-view">Some activities should be here</div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
