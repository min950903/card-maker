import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Login from './components/login/login';
import styles from './app.module.css';
import CardApp from './pages/cardApp';
import { useEffect } from 'react';
import { useCallback } from 'react';

const App = ({ authService }) => {
  const [isLogin, setIsLogin] = useState(false);

  const history = useHistory();

  const checkLogin = useCallback(() => {
    setIsLogin(true);

    history.push('/app');
  }, [history]);

  const onLogout = useCallback(() => {
    console.log('test');
    setIsLogin(false);

    history.push('/login');
  }, [history]);

  return (
    <Switch>
      <Route path={['/login', '/']} exact>
        <div className={styles.login}>
          <Login
            authService={authService}
            checkLogin={checkLogin}
            onLogout={onLogout}
          />
        </div>
      </Route>
      <Route path='/app'>
        <div className={styles.app}>
          <CardApp />
        </div>
      </Route>
    </Switch>
  );
};

export default App;
