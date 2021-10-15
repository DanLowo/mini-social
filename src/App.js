import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import "material-design-icons/iconfont/material-icons.css";
import Register from "./Auth/Register";
import "./assets/App.css";
import Profile from "./Profile";
import Navbar from "./components/Navbar";
import EditProfile from "./Profile/EditProfile";
import Login from "./Auth/Login";
import { serverRender } from "./store/user";

function App() {
  const dispatch = useDispatch()
  const [loggedIn, setLoggedIn] = useState(false);
  const { token } = useSelector((state) => state.user);

  useEffect(() => {

    dispatch(serverRender())
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (token !== "") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false)
    }
  }, [token])

  if(!loggedIn) {
    return (
      <>
        <Navbar />
        <Redirect exact from="/" to="/login" />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

      </>
    )
  }

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Profile />
        </Route>
        <Route path="/edit-profile">
          <EditProfile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
