/**
 * Created by chenghao01 on 2017/3/14.
 */
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Router,Route,hashHistory,IndexRoute,browserHistory} from 'react-router';
import './../css/index.css';
import './../less/index.less';
import './../css/antd.min.css';
import './../css/layout.css';

import Index from  './../components/home/home.js'
import Hard from  './../components/hard/hard.js'
import Redux from  './../components/redux/redux.js'
import Me from './../components/home/me';
import LayoutIndex from './../components/layout/layout'
import Meto from './../components/layout/Meto'

ReactDom.render((

    <Router history={hashHistory}>
        <Route path='/' component={LayoutIndex}>
            <IndexRoute component={Index}/>
            <Route path="/me" component={Me}>
                <Route path='/meto' component={Meto}/>
            </Route>
            <Route path='/hard' component={Hard}/>
            <Route path='/redux' component={Redux}/>
        </Route>

    </Router>

),document.getElementById('app'));
