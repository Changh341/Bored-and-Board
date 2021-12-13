import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import LoginFormModal from '../LoginFormPage';
import DemoUser from '../DemoUser';


function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='rightNavi'>
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <div class='rightNavi'>
        <LoginFormModal />
        <NavLink className='nav-btn' to="/signup">Sign Up</NavLink>
        <DemoUser />
      </div>
    );
  }

  return (
    <ul id='navigationBar'>
      <li>
        <div id='leftNav'>
          <NavLink exact to="/"><img id='logohead' src='https://i.imgur.com/7zUVqWj.png'></img></NavLink>
        </div>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;