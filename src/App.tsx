import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Router } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import historyService from './services/historyService';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Router history={historyService.history}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="*" component={() => <div>Not Found</div>} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
