import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MySpace from "./pages/myspace/myspace";
import Home2 from "./pages/home/home2";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { Jumbotron } from "react-bootstrap";
import SpaceDetails from "./pages/spaceDetails/spaceDetails";

// const Home = () => (
//   <Jumbotron>
//     <h1>Home</h1>
//   </Jumbotron>
// );
// const Other = () => (
//   <Jumbotron>
//     <h1>Other</h1>
//   </Jumbotron>
// );

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Home2} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/myspace" component={MySpace} />
        <Route path="/spaces/:id" component={SpaceDetails} />
      </Switch>
    </div>
  );
}

export default App;
