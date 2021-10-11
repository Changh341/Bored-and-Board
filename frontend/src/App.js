import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import './App.css'
import PlaceBrowser from "./components/PlaceBrowser";

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
              <div className='discover-city' id='plano'>Plano, TX</div>
              <div className='discover-city' id='lubbock'>Lubbock, TX</div>
              <div className='discover-city' id='cheasapeak'>Cheasapeak, VA</div>
              <div className='discover-city' id='fort-wayne'>Fort Wayne, IN</div>
              <div className='discover-city' id='san-bernardino'>San Bernardino, CA</div>
              <div className='discover-city' id='stockton'>Stockton, CA</div>
            </div>
            <div id='footer'>
              <a target='_blank' href='https://github.com/Changh341'>My Github</a>
              <a target='_blank' href='https://www.linkedin.com/in/hao-chang-459128b1'>My LinkedIn</a>
            </div>
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/places'>
            <PlaceBrowser />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
