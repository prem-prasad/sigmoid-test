import { combineReducers } from 'redux';
import gateway from './gateway';

const appReducer = combineReducers({
  gateway
});

const root_reducer = (state, action) => {
  if (action.type === 'USER_LOGOUT' || action.type === 'REFRESH_STATE') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default root_reducer;
