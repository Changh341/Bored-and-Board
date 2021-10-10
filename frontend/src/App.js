import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import './App.css'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <div id='splash-div'>
              <span>Ready to find a boring place?</span>
              <button id='explore-btn'>Explore now</button>
            </div>
            <div id='discover-div'>
              <div className='discover-city'>Lubbock, TX</div>
              <div className='discover-city'>Cheasapeak, VA</div>
              <div className='discover-city'>Fort Wayne, IN</div>
              <div className='discover-city'>San Bernardio, CA</div>
            </div>
            <div id='footer'>
              <a href=''>My Github</a>
              <a href=''>My LinkedIn</a>
            </div>
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;