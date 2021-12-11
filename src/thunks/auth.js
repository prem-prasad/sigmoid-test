export const logout = () => async (dispatch) => {
  localStorage.clear();
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
