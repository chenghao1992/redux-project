import './css/antd.min.css';
import './css/layout.css';


import React from 'react'
import { render } from 'react-dom'
import { createStore,applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import DefaultPage from './containers/defaultPage'

import Me from './components/me'
import reducer from './reducers/index'
import {Router,Route,hashHistory,IndexRoute,browserHistory} from 'react-router';
import Layout from './components/layout'
import TodoDemo from './components/TodoDemo'
import TestOwnProps from './components/test-ownProps'
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk))
// React-Redux 提供Provider组件，可以让容器组件拿到state。
render(
  <Provider store={store}>
      <Router history={hashHistory}>
          <Route path='/' component={Layout}>
              <IndexRoute component={DefaultPage}></IndexRoute>
              <Route path='/me' component={Me}></Route>
              <Route path='/todoDemo' component={TodoDemo}></Route>
              <Route path='/test-ownProps' component={TestOwnProps}></Route>
          </Route>

      </Router>
  </Provider>,
  document.getElementById('root')
)
