import React, { useState } from 'react';
import { editUserFetch } from '../../services/userApi';
// import PropTypes from 'prop-types';

const EditUser = ({ history, match}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');


  const handleEdit = async (e) => {
    e.preventDefault();
    const { message, status } = await editUserFetch(username, newUsername, email, newEmail);
    if (!status.toString().startsWith('2')) return alert(message);
    history.push('/register');
  };
  
  const handleEmailEditChange = ({ target }) => {
    setEmail(target.value);
  };

  const handleUsernameEditChange = ({ target }) => {
    setUsername(target.value);
  };

  const handleNewEmailEditChange = ({ target }) => {
    setNewEmail(target.value);
  };

  const handleNewUsernameEditChange = ({ target }) => {
    setNewUsername(target.value);
  };

  return (
    <form onSubmit={handleEdit}>
      <h3>Edit User</h3>
      <label htmlFor="username">
        Username:
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameEditChange}
        />
      </label>
      <label htmlFor="newUsername">
        New Username:
        <input
          type="text"
          id="newUsername"
          value={newUsername}
          onChange={handleNewUsernameEditChange}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailEditChange}
        />
      </label>
      <label htmlFor="newEmail">
        New Email:
        <input
          type="text"
          id="newEmail"
          value={newEmail}
          onChange={handleNewEmailEditChange}
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

export default EditUser;
