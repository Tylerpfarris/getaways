import React, { useState } from 'react';
import { loginUser } from '../../services/userApi';
// import PropTypes from 'prop-types';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { message, status } = await loginUser(email, password);
    if (!status.toString().startsWith('2')) return alert(message);
    history.push('/register');
  };

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  return (
    <form onSubmit={handleLogin}>
      <h3>User Login</h3>
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
      <button aria-label="login-button">Submit</button>
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

export default Login;
