import './css/antd.min.css'
import './css/layout.css';
// 使用css Modules 后样式这样引入会失效，只用使用link标签引入，还不知道如何解释

import React from 'react'
import { render } from 'react-dom'
import { createStore,applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import DefaultPage from './containers/defaultPage'

import Me from './components/me'
import reducer from './reducers/index'
import {Router,Route,hashHistory,IndexRoute,browserHistory} from 'react-router';
import Layout from './components/layout'
import TodoDemo from './components/TodoDemo'
import TestOwnProps from './components/test-ownProps'
const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}
console.log(process.env.NODE_ENV)
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(...middleware))
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
