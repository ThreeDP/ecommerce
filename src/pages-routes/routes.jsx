import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './home';
import Product from './product';
import User from './user';
import SurveyForm from './surveyform';

const RoutesHtml = () => {
    return(
        <Router>
            <Routes>
                <Route element={<Home />} path="/" exact/>
                <Route element={<Product /> } path="/product"/>
                <Route element={<User />} path="/user"/> 
                <Route element={<SurveyForm />} path="/surveyform"/>
            </Routes>     
        </Router>
    )
}

export default RoutesHtml;