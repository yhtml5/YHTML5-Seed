import { initializeApp } from './task'
import { init as initializeLogin } from '../Login/task'
import { init as initializeLayout } from '../Layout/task'
import { init as initPackages } from '../Packages/task'
import { checkToken } from '../../util/util'
// import {ajaxMenus, changeMenus, verifyPermissions} from './task'

function listener(store, history) {
  // console.clear()
  const pathname = history.location.pathname
  checkToken()
  store.dispatch({ type: 'UpdatePathname', payload: pathname })
  if (store.getState().app.pathnameChange) {
    console.warn('routeChangeTrue')
    store.dispatch(initializeLayout())
    store.dispatch(initializeApp())
    switch (pathname) {
      case '/':
        console.log('in the root route')
        break
      case '/login':
        store.dispatch(initializeLogin())
        break
      case '/packages':
        store.dispatch(initPackages())
        break
      case '/packages/add':
        store.dispatch(initPackages('add'))
        break
      case '/packages/edit':
        store.dispatch(initPackages('edit'))
        break
      default:
        break
    }
  }
}

function routeChange(store, history) {
  (process.env.NODE_ENV === 'production')
    ? console.clear()
    : (() => {
      console.group('router')
      console.warn('store', store)
      console.warn('state', store.getState())
      console.warn('history', history)
      console.warn('pathname', history.location.pathname)
      console.groupEnd()
    })()

  listener(store, history)
  history.listen(() => listener(store, history))
}

export { routeChange }
