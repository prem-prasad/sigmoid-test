
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

const store = (initialState = {}, history) => {
  const middlewares = [routerMiddleware(history), thunk];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    reducers,
    initialState,
    compose(
      ...enhancers,
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    )
  );

  return store;
};

export default store;
