import React, { useCallback, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import styles from './app.module.css';
import Card from './components/card/card';
import Login from './components/login/login';

const App = ({ FileInput, authService, dbService }) => {
  const [isLogin, setIsLogin] = useState(false);

  const history = useHistory();

  const checkLogin = useCallback(
    (userId) => {
      setIsLogin(true);

      history.push({ pathname: '/app', state: { id: userId } });
    },
    [history]
  );

  return (
    <Switch>
      <Route path={['/login', '/']} exact>
        <div className={styles.login}>
          <Login authService={authService} checkLogin={checkLogin} />
        </div>
      </Route>
      <Route path='/app'>
        <Card
          FileInput={FileInput}
          authService={authService}
          dbService={dbService}
        />
      </Route>
    </Switch>
  );
};

export default App;
