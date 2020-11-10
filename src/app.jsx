import React from 'react';
import './app.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';

function App() {
  return (
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
