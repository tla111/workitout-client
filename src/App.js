import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <RegisterScreen />
        </Route>
        <Route exact path='/myProfile'>
          <ProfileScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
