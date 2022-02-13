import React, { useEffect, useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import ArcReactor from './app/components/ArcReactor';
import DateTime from './app/components/DateTime';
import Logout from './app/components/Logout';
import Dashboard from './app/main/dashboard/Dashboard';
import Home from './app/main/home/Home';
import Login from './app/main/login/Login';

const App = props => {
  const [ token, setToken ] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token)
      setToken(user.token);
  }, []);

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="flex flex-row w-full h-full" style={{ color: '#FFFFFF' }}>
      <div className="flex flex-col w-1/5 p-4">
        <DateTime />
        <div className={"w-full flex space-y-8 flex-col pl-8 pt-16"}>
          <Link to="/home" className={'pr-8'} style={{ fontSize: 21 }}>Home</Link>
          <Link to="/" className={'pr-8'} style={{ fontSize: 21 }}>Dashboard</Link>
        </div>

      </div>
      <div className="w-4/5 h-full p-3">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <ArcReactor />
            <Dashboard />
          </Route>
        </Switch>
        <Logout setToken={setToken} />
      </div>
    </div>
  )
};

export default App;
