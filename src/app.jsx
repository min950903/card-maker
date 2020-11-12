import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import styles from './app.module.css';
import CardApp from './pages/cardApp';

function App() {
  return (
    <Switch>
      <Route path={['/login', '/']} exact>
        <div className={styles.login}>
          <Login />
        </div>
      </Route>
      <Route path='/app'>
        <div className={styles.app}>
          <CardApp />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
