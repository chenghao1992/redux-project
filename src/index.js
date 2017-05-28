import './css/antd.min.css';
import './css/layout.css';


import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import DefaultPage from './containers/defaultPage'

import Me from './components/me'
import reducer from './reducers'
import {Router,Route,hashHistory,IndexRoute,browserHistory} from 'react-router';
import Layout from './components/layout'
import TodoDemo from './components/TodoDemo'
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
render(
  <Provider store={store}>
      <Router history={hashHistory}>
          <Route path='/' component={Layout}>
              <IndexRoute component={DefaultPage}/>
              <Route path='/me' component={Me}></Route>
              <Route path='/todoDemo' component={TodoDemo}></Route>
          </Route>

      </Router>
  </Provider>,
  document.getElementById('root')
)
