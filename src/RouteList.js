import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Jobs from './Home';
import Profile from './Profile';
import CompaniesDetail from './CompaniesDetails';
import CompaniesList from './CompaniesList';


function RouteList() {
    return (
        <BrowserRouter>
        <Routes>
            <Route exact path="/">
               <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/signup">
                <SignUp />
            </Route>
            <Route exact path="/jobs">
                <Jobs />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route exact path="/companies">
                <CompaniesList />
            </Route>
            <Route path="/companies/:id">
                <CompaniesDetail />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default RouteList;