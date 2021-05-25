import React, {useState} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Login from '../user/Login';
// import Getaways from '../../containers/Getaways';
import Register from '../user/Register';
import EditUser from '../user/EditUser';
import Getaways from '../../containers/Getaways';
import PlaceDetails from '../places/PlaceDetails';
import Home from '../../containers/Home';


export default function App() {
  const [userToken, setUserToken] = useState(localStorage.getItem('TOKEN'));
  console.log('USER LOGGED IN TOKEN ', !!userToken);

  const handleLogin = (token) => {
    setUserToken(token);
  }

  const handleLogout = () => {
    setUserToken('')
  }
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/edit/:id">Edit User</Link>
      <br />
      <Link to="/places">Home</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/register"
          render={(routerProps) => (
            <Register
              handleLogin={handleLogin}
              userToken={userToken}
              {...routerProps}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={(routerProps) => (
            <Login
              handleLogin={handleLogin}
              userToken={userToken}
              {...routerProps}
            />
          )}
        />
        <Route exact path="/edit/:id" component={EditUser} />

        <Route exact path="/places" component={Getaways} />
        <Route exact path="/places/:id" component={PlaceDetails} />
      </Switch>
    </>
  );
}
