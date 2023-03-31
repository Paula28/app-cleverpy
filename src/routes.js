

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
// import EditCustomer from './screens/Customers/_utils/EditCustomer';
// import EditUser from './screens/Users/_utils/EditUser';
// import NewCustomer from './screens/Customers/_utils/NewCustomer';
import Main from './pages/Main';
import ScreenDetailPost from './pages/ScreenDetailPost';

const AppRoutes = () => (
    <App>
        <Navbar/>
        <Switch>
            <Redirect from="/" exact to="/main" />
            <Route path="/main" component={Main} />
            <Route path="/post/:id"component={ScreenDetailPost} />
            {/* <Route path="/users/edit/:id" component={EditUser} />
            <Route path="/users" component={Users} />
            <Route path="/customers/new" component={NewCustomer} />
            <Route path="/customers/edit/:id" component={EditCustomer} />
            <Route path="/customers" component={Customers} /> */}
        </Switch>
    </App>
);

export default AppRoutes;