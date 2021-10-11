import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import * as sessionActions from '../../store/session';
import './ProfileButton.css'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory()
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const userHosting = (event) => {
    event.preventDefault();
    history.push('/myplaces')
  }

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button id='profile-btn' onClick={openMenu}>
        <i style={{ fontSize: 30 }} className="far fa-user-circle" />
      </button>
      {showMenu && (
        <div id='profile-div'>
          <ul className="profile-dropdown">
            <span id='dropdown-greetuser'>Hello {user.username}!</span>
            <li><button className='session-user-btn'>My Profile</button></li>
            <li><button className='session-user-btn'>My Bookings</button></li>
            <li><button className='session-user-btn' onClick={userHosting}>My Hostings</button></li>
            <li>
              <button className='session-user-btn' onClick={logout}>Log Out</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default ProfileButton;