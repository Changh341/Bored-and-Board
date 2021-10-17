import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import './App.css'
import PlaceBrowser from "./components/PlaceBrowser";
import PlaceManager from "./components/PlaceManagement";
import CreatePlaceForm from "./components/PlaceFormPage";
import EditPlaceForm from "./components/PlaceEditForm";
import BookingUserView from "./components/BookingUserView";
import { NavLink } from "react-router-dom";
import BookingConfirmation from "./components/BookingForm";

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
            </div>
            <NavLink id='explore-btn' to='/places'>Explore</NavLink>
            <div id='discover-div'>
              <b>Popular </b>
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
          <Route exact path='/places'>
            <PlaceBrowser />
          </Route>
          <Route exact path='/myplaces'>
            <PlaceManager />
          </Route>
          <Route path='/addlisting'>
            <CreatePlaceForm />
          </Route>
          <Route path='/myplaces/edit/:id'>
            <EditPlaceForm />
          </Route>
          <Route path='/mybookings'>
            <BookingUserView />
          </Route>
          <Route path='/confirm-booking'>
            <BookingConfirmation />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
