import createStore from './createStore'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { useRouterHistory } from 'react-router'

// ========================================================
// Browser History Setup
// ========================================================
const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: __BASENAME__
})

const initialState = window.___INITIAL_STATE__

const store = createStore(initialState, browserHistory)

export {
  browserHistory,
  initialState,
  store
}
