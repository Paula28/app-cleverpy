

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Wrapper from './components/Wrapper';
import Login from './pages/Login';
import Main from './pages/Main';
import ScreenDetailPost from './pages/ScreenDetailPost';
import ScreenEditPost from './pages/ScreenEditPost';

const AppRoutes = () => (
    <App>
        <Switch>
            <Redirect from="/" exact to="/login" />
            <Route path="/login" component={Login} />
            <Route path="/main" component={() => <Wrapper><Main/></Wrapper>} />
            <Route path="/post/:id" component={() => <Wrapper><ScreenDetailPost/></Wrapper>}  exact/>
            <Route path="/post/:id/edit" component={() => <Wrapper><ScreenEditPost/></Wrapper>} exact />

            
        </Switch>
    </App>
);

export default AppRoutes;