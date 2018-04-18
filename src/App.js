import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from "./components/pages/homePage";
import Login from  "./components/pages/login";
import Register from "./components/pages/register";
import Loginscreen from "./components/pages/loginScreen";


// CSS
import './Assets/scss/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Header  />
          <Route exact path= "/" component= {Homepage}/>
          <Route exact path= "/login" component={Login} />
          {/* <Route exact path= "/discover" component= {Discover} /> */}
       
          <div className= "background"> 
          
          </div>
       
        <Footer  />
      
      </div>
      </Router>
    );
  }
}

export default App;
