
import React from 'react'
import { store, browserHistory } from './store/index'
import ReactDOM from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import AppContainer from './containers/AppContainer'

const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

// ========================================================
// Store and History Instantiation
// ========================================================
// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the routerKey "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
})

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEBUG__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}

// const token = localStorage.getItem('token');
// if (token !== null) {
//   const jsonToken = JSON.parse(token);
//   store.dispatch(loginUserSuccess(jsonToken));
//   // store.dispatch(api.actions.receipt.getReceipt({id: 'order_1', token: store.getState().auth}));
// }

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = (routerKey = null) => {
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <AppContainer
      store={store}
      history={history}
      routes={routes}
      routerKey={routerKey}
    />,
    MOUNT_NODE
  )
}

// Enable HMR and catch runtime errors in RedBox
// This code is excluded from production bundle
if (__DEV__ && module.hot) {
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react')

    ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
  }
  render = () => {
    try {
      renderApp(Math.random())
    } catch (error) {
      renderError(error)
    }
  }
  module.hot.accept(['./routes/index'], () => render())
}




// ========================================================
// Go!
// ========================================================
render()
