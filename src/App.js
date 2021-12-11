import React from "react";
import './App.css';
import Navbar from "./component/Navbar";
import profile from './img/PPP.png';
import Welcome from "./component/Welcome";
import Profile from "./component/Profile";
import Contact from "./component/Contact";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Portofolio from "./component/Portofolio";

function App() {
  return (

    <div className='row content'>

      <div className='col-lg-4 col-img'>
        <div className="nav-btm d-flex align-items-end justify-content-center">
          <a href="https://github.com/kwul0208" target="_blank"><i class="fab fa-github"></i></a>
          <a href="https://web.facebook.com/hatake.awal?_rdc=1&_rdr"><i class="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/awal_ljv/"><i class="fab fa-instagram"></i></a>
        </div>
      </div>

      <div className='col-lg-8 col-comp bg-white'>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Welcome} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/portofolio' exact component={Portofolio} />
            <Route path='/contact' exact component={Contact} />
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App;