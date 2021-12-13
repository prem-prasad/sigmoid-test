import {
  getBarData,
  getDateRange,
  getPieData,
  getTableData
} from '../queries/dashboard';

export const fetchDateRange = (payload, user_token) => async (dispatch) => {
  dispatch({ type: 'FETHING_DATE_RANGE_INITIATED' });
  try {
    const response = await getDateRange(payload, user_token);

    if (response.status === 200) {
      const convertedDateResponse = {
        startDate: new Date(parseInt(response.data.result.startDate)),
        endDate: new Date(parseInt(response.data.result.endDate))
      };
      dispatch({
        type: 'FETHING_DATE_RANGE_SUCCESSFUL',
        payload: convertedDateResponse
      });
    } else {
      dispatch({
        type: 'FETHING_DATE_RANGE_FAILED',
        payload: response.data.statusMessage
      });
    }
  } catch (error) {
    console.error('error occured: ', error);

    dispatch({
      type: 'FETHING_DATE_RANGE_FAILED',
      payload: 'Some unexpected error occured'
    });
  } finally {
    dispatch({ type: 'FETHING_DATE_RANGE_COMPLETED' });
  }
};

export const fetchTableData = (payload, user_token) => async (dispatch) => {
  dispatch({ type: 'FETHING_TABLE_DATA_INITIATED' });
  try {
    const response = await getTableData(payload, user_token);

    if (response.status === 200) {
      const processedData = response.data.result.data.map((d) => {
        return {
          ...d,
          impressions_offered: parseInt(d.impressions_offered)
        };
      });
      dispatch({
        type: 'FETHING_TABLE_DATA_SUCCESSFUL',
        payload: processedData
      });
    } else {
      dispatch({
        type: 'FETHING_TABLE_DATA_FAILED',
        payload: response.data.statusMessage
      });
    }
  } catch (error) {
    console.error('error occured: ', error);

    dispatch({
      type: 'FETHING_TABLE_DATA_FAILED',
      payload: 'Some unexpected error occured'
    });
  } finally {
    dispatch({ type: 'FETHING_TABLE_DATA_COMPLETED' });
  }
};

export const fetchPieData = (payload, user_token) => async (dispatch) => {
  dispatch({ type: 'FETHING_PIE_DATA_INITIATED' });
  try {
    const response = await getPieData(payload, user_token);

    if (response.status === 200) {
      const processedData = response.data.result.data.map((d) => {
        return {
          ...d,
          CM001: parseFloat(d.CM001),
          CM001_percent: parseFloat(d.CM001_percent)
        };
      });
      dispatch({
        type: 'FETHING_PIE_DATA_SUCCESSFUL',
        payload: processedData
      });
    } else {
      dispatch({
        type: 'FETHING_PIE_DATA_FAILED',
        payload: response.data.statusMessage
      });
    }
  } catch (error) {
    console.error('error occured: ', error);

    dispatch({
      type: 'FETHING_PIE_DATA_FAILED',
      payload: 'Some unexpected error occured'
    });
  } finally {
    dispatch({ type: 'FETHING_PIE_DATA_COMPLETED' });
  }
};

export const fetchBarData = (payload, user_token) => async (dispatch) => {
  dispatch({ type: 'FETHING_BAR_DATA_INITIATED' });
  try {
    const response = await getBarData(payload, user_token);

    if (response.status === 200) {
      const processedData = response.data.result.data.map((d) => {
        return {
          ...d,
          impressions_offered: parseFloat(d.impressions_offered) / 1000
        };
      });
      dispatch({
        type: 'FETHING_BAR_DATA_SUCCESSFUL',
        payload: processedData
      });
    } else {
      dispatch({
        type: 'FETHING_BAR_DATA_FAILED',
        payload: response.data.statusMessage
      });
    }
  } catch (error) {
    console.error('error occured: ', error);

    dispatch({
      type: 'FETHING_BAR_DATA_FAILED',
      payload: 'Some unexpected error occured'
    });
  } finally {
    dispatch({ type: 'FETHING_BAR_DATA_COMPLETED' });
  }
};
