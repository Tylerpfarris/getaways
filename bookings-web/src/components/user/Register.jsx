import React, { useState } from 'react';
import { registerUser } from '../../services/placesApi';
// import PropTypes from 'prop-types';

const Register = ({ history }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();
   const {message, status} =  await registerUser(username, email, password);
     if(!status.toString().startsWith('2')) return alert(message);
     history.push('/register');
  };

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handleUsernameChange = ({ target }) => {
    setUsername(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  return (
    <form onSubmit={handleRegistration}>
      <h3>User Registration</h3>
      <label htmlFor="username">
        Username:
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button aria-label="register-button">Submit</button>
    </form>
  );
};
// Register.propTypes = {
//   user: PropTypes.objectOf(
//     PropTypes.shape({
//       onSubmit: PropTypes.string.isRequired,
//       username: PropTypes.string.isRequired,
//       onUsernameChange: PropTypes.string.isRequired,
//       email: PropTypes.string.isRequired,
//       onEmailChange: PropTypes.string.isRequired,
//       password: PropTypes.string.isRequired,
//       onPasswordChange: PropTypes.string.isRequired,
//     }).isRequired
//   ),
// };

export default Register;
