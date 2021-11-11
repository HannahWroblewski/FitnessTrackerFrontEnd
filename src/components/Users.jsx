import React, { useState, useEffect } from "react";
import {registerUser} from "../api";
import {storeToken} from "../auth";

const Users = () => {
    return (
      <header>
        <h1>Welcome to the Users Component</h1>
      </header>
    );
  };

export default Users;