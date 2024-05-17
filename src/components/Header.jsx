import React from "react";
import logo from "../../assests/images/logofoodsite.png"

const Title = () => {
    return(
     <img className="logo" alt="logo" src={logo} /> 
    );
  } 

  const NavComponent = () => {
    return (
      <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
    );
  }

 const Header = () => {
    return (
      <div className="header">
        <Title />
        <NavComponent />
      </div>
    );
  };

  export default Header;
