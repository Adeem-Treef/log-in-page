
import React, { Component } from 'react';
import './App.css';
import logo from "./img/MENAGET.png";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="image--container">
          <img src={logo} alt="" />
        </div>
        
        <h2> Log In to your dashboard </h2>
        <p> Log in to your admin account dashboard </p>

        <form>
          <span> Email Address </span>
          <input type="email"  placeholder="Email address" />

          <span> Password </span>
          <input type="password" placeholder="Password" />

          <input type="submit" value="Log In" />

          <div className="others">
              <div className="remember--me"> 
                <input className="checkbox" type="checkbox" /> 
                <span> Remember me</span>
              </div>

              <p> Forgotten Password? </p>
          </div>
        </form>
      </div>
    )
  }
}

export default App;
