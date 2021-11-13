import React from "react";
import ReactDOM from "react-dom";
import { getUser } from "../auth";

const Header = ({isLoggedIn, setIsLoggedIn}) =>{
  const myUser = getUser()
  return (
    <header className="header">
      {myUser ? <h1 className="title">Welcome to Fitness Tracker, {myUser}!</h1>
      : <h1 className="title">Welcome To Fitness Tracker, Guest!</h1>}
    </header>
  );
  }

export default Header;
