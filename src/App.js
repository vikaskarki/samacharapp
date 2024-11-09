import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import NewsForYou from './Components/NewsForYou';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
 const pageSize= 8;

  const [progress, setProgress] = useState(0);
   
    return (
      <div>
        <Router >
        
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route exact path="/" element={<NewsForYou setProgress= {setProgress} key="General" pageSize={pageSize} country="us" category= "General" />}/> 
          <Route exact path="/business" element={<NewsForYou setProgress= {setProgress} key="Business" pageSize={pageSize} country="us" category= "Business" />}/>
          <Route exact path="/entertainment" element={<NewsForYou setProgress= {setProgress} key="Entertainment" pageSize={pageSize} country="us" category= "Entertainment" />}/>
          <Route exact path="/home" element={<NewsForYou setProgress= {setProgress} key="General" pageSize={pageSize} country="us" category= "General" />}/>
          <Route exact path="/health" element={<NewsForYou setProgress= {setProgress} key="Health" pageSize={pageSize} country="us" category= "Health" />}/>
          <Route exact path="/science" element={<NewsForYou setProgress= {setProgress} key="Science" pageSize={pageSize} country="us" category= "Science" />}/>
          <Route exact path="/sports" element={<NewsForYou setProgress= {setProgress} key="Sports" pageSize={pageSize} country="us" category= "Sports" />}/>
          <Route exact path="/technology" element={<NewsForYou setProgress= {setProgress} key="Technology" pageSize={pageSize} country="us" category= "Technology"/>}/>
        </Routes>
        </Router>
        
      </div>
    )
  
}
export default App;
