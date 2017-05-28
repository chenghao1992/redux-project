/**
 * Created by chenghao01 on 2017/3/14.
 */
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Router,Route,hashHistory,IndexRoute,browserHistory} from 'react-router';
import App from  './components/App.js'

ReactDom.render((

    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={App}/>
        </Route>

    </Router>

),document.getElementById('root'));
