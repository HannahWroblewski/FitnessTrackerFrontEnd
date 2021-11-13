// src/index.js
import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect
} from "react-router-dom";

import { Header, Activities, NavBar, Routines, Users } from "./components";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allRoutines, setAllRoutines] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  const [activeUser, setActiveUser] = useState(false);
  const [user, setUser] = useState({});

  const FetchAllActivities = async () => {
    try {
      // const myToken = getToken();

      //   if (myToken) {
      //     setIsLoggedIn(true);
      //   }

      const { data } = await axios.get(
        "https://fitnesstrac-kr.herokuapp.com/api"
        // {
        //   headers: {
        //     "Authorization": `Bearer ${myToken}`,
        //   },
        // }
      );

      setAllActivities(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(async () => {
    FetchAllActivities();
  }, []);

  return (
    <Router>
      <div id="App">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Switch>
          <Route exact path="/activities">
            <Activities
              setAllActivities={setAllActivities}
              allActivities={allActivities}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
