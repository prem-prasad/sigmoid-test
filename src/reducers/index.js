import { combineReducers } from 'redux';
import auth from './auth';
import dashboard from './dashboard';


const appReducer = combineReducers({
  auth,
  dashboard
});

const root_reducer = (state, action) => {
  if (action.type === 'USER_LOGOUT' || action.type === 'REFRESH_STATE') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default root_reducer;
