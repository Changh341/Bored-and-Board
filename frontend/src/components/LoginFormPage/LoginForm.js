import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import './LoginForm.css';


function LoginFormPage() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <form id='login-form' onSubmit={handleSubmit}>
      <h3>Log in</h3>
      <label>
        Username or Email
      </label>
      <input
        type="text"
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
        required
      />
      <label>
        Password
      </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <ul className='errorUl'>
        {errors.map((error, idx) => <li className='errorText' key={idx}>{error}</li>)}
      </ul>
      <button id='submit-btn' type="submit">Log In</button>

      <a href='/signup' >Don't have an account?</a>
    </form>
  );
}

export default LoginFormPage;