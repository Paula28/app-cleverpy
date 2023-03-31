

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Wrapper from './components/Wrapper';
import Login from './pages/Login';
import Main from './pages/Main';
import ScreenDetailPost from './pages/ScreenDetailPost';

const AppRoutes = () => (
    <App>
        <Switch>
            <Redirect from="/" exact to="/login" />
            <Route path="/login" component={Login} />
            <Route path="/main" component={() => <Wrapper><Main/></Wrapper>} />
            <Route path="/post/:id"component={() => <Wrapper><ScreenDetailPost/></Wrapper>} />
        </Switch>
    </App>
);

export default AppRoutes;