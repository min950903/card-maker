import React from 'react';
import './app.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import styles from './components/login/login.module.css';

function App() {
  return (
    <Switch>
      <Route path='/login'>
        <div className={styles.container}>
          <Login />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
