import React, { useCallback, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import CardApp from './pages/cardApp';

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
          <Login authService={authService} checkLogin={checkLogin} />
        </div>
      </Route>
      <Route path='/app'>
        <div className={styles.app}>
          <CardApp onLogout={onLogout} />
        </div>
      </Route>
    </Switch>
  );
};

export default App;
