import React, { useCallback, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import styles from './app.module.css';
import Card from './components/card/card';
import Login from './components/login/login';

const App = ({ authService }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [card, setCard] = useState([]);

  const history = useHistory();

  const checkLogin = useCallback(
    (userId) => {
      setIsLogin(true);

      history.push({ pathname: '/app', state: { id: userId } });
    },
    [history]
  );

  const onChangeCard = () => {};

  return (
    <Switch>
      <Route path={['/login', '/']} exact>
        <div className={styles.login}>
          <Login authService={authService} checkLogin={checkLogin} />
        </div>
      </Route>
      <Route path='/app'>
        <Card authService={authService} />
      </Route>
    </Switch>
  );
};

export default App;
