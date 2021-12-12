import postLogin from '../queries/auth';

export const logout = (history) => async (dispatch) => {
  localStorage.clear();
  history.push("/login")
  dispatch({
    type: 'USER_LOGOUT', // will be handled in root reducer
    payload: {}
  });
};

export const refreshState = () => async (dispatch) => {
  dispatch({
    type: 'REFRESH_STATE', // will be handled in root reducer
    payload: {}
  });
};

export const login = (payload) => async (dispatch) => {
  dispatch({ type: 'LOGIN_INITIATED' });
  try {
    const response = await postLogin(payload);

    if (response.status === 200) {
      localStorage.setItem('user_token', response.data.token);
      localStorage.setItem('isLoggedIn', true);

      dispatch({
        type: 'LOGIN_SUCCESSFUL',
        payload: response.data.token
      });
    } else {
      dispatch({
        type: 'LOGIN_FAILED',
        payload: response.data.statusMessage
      });
      localStorage.setItem('isLoggedIn', false);
    }
  } catch (error) {
    console.error('error occured: ', error);
    localStorage.setItem('isLoggedIn', false);

    dispatch({
      type: 'LOGIN_FAILED',
      payload: 'Some unexpected error occured'
    });
  } finally {
    dispatch({ type: 'LOGIN_COMPLETED' });
  }
};
