import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Login from '../user/Login';
// import Getaways from '../../containers/Getaways';
import Register from '../user/Register';
import EditUser from '../user/EditUser';
import Getaways from '../../containers/Getaways';
import PlaceDetails from '../places/PlaceDetails';


export default function App({match}) {
  console.log(match)
  return (
    <>
      <Link to='/register'>Register</Link>
      <br/>
      <Link to='/login'>Login</Link>
      <br />
      <Link to='/edit/:id'>Edit User</Link>
      <br/>
      <Link to='/places'>Home</Link>
      <Switch>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/edit/:id' component={EditUser}/>
        <Route exact path='/places' component={Getaways}/>
        <Route exact path='/places/:id' component={PlaceDetails}/>
      </Switch>
    </>

  );
}
