// import React, { useState, useEffect } from "react";
// import {registerUser} from "../api";
// import {storeToken} from "../auth";

// const Users = () => {
//     return (
//       <header>
//         <h1>Welcome to the Users Component</h1>
//       </header>
//     );
//   };

// export default Users;

import React, { useState, useEffect } from "react";
import {registerUser} from "../api"
import {storeToken} from "../auth"
import { NavLink } from "react-router-dom";
import { getToken, getUser } from "../auth";

const Header = ({ loggedIn, setLoggedIn }) => {
  const user = getUser();

  return (
    <div className="NavBar">
      <p className="HeadTitle">Fitness Tracker</p>

      {loggedIn ? (
        <>
          <NavLink className="myActivities" to="/my-Activities">
            My Activities
          </NavLink>
          <NavLink className="myRoutines" to="/my-Routines">
            My Routines
          </NavLink>

          <NavLink className="loggedUser" to="/my-">{`${user}`}</NavLink>

          <NavLink
            className="Head-Logged-in"
            to="/login"
            onClick={() => {
              localStorage.clear();
              setLoggedIn(false);
            }}
          >
            Log Out
          </NavLink>
        </>
      ) : (
        <>
          <NavLink className="Routines" to="/Routines">
            Routines
          </NavLink>
          <NavLink className="Activities" to="/Activities">
            Activities
          </NavLink>
          <NavLink className="Head-Login" to="/login">
            Login
          </NavLink>
          <NavLink className="sign-up" to="/sign-up">
            Sign Up
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Header;


