import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './src/reducers/root';

// export default compose(applyMiddleware(thunkMiddleware))(createStore)(rootReducer);

/**
 * Create the store
 */
export default function configureStore(initialState = {}) {
  // Create the store with middlewares
  const middlewares = [
    thunkMiddleware
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  /* eslint-enable */

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers)
  );

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  // if (module.hot) {
  //   module.hot.accept('./reducers', () => {
  //     import('./reducers').then((reducerModule) => {
  //       const createReducers = reducerModule.default;
  //       const nextReducers = createReducers(store.asyncReducers);
  //
  //       store.replaceReducer(nextReducers);
  //     });
  //   });
  // }

  return store;
}
