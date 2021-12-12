const INIT_STATE = {
  dateRange: {},
  dateRangeInAction: false,
  dateRangeError: '',

  tableData: [],
  tableDataInAction: false,
  tableDataError: '',

  barData: [],
  barDataInAction: false,
  barDataError: '',

  pieData: [],
  pieDataInAction: false,
  pieDataError: ''
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    /*  Date Range reducer  */
    case 'FETHING_DATE_RANGE_INITIATED':
      return {
        ...state,
        dateRangeInAction: true
      };
    case 'FETHING_DATE_RANGE_SUCCESSFUL':
      return {
        ...state,
        dateRange: action.payload,
        dateRangeError: ''
      };
    case 'FETHING_DATE_RANGE_FAILED':
      return {
        ...state,
        dateRange: [],
        dateRangeError: action.payload
      };
    case 'FETHING_DATE_RANGE_COMPLETED':
      return {
        ...state,
        dateRangeInAction: false
      };

    /*  Table Data reducer  */
    case 'FETHING_TABLE_DATA_INITIATED':
      return {
        ...state,
        tableDataInAction: true
      };
    case 'FETHING_TABLE_DATA_SUCCESSFUL':
      return {
        ...state,
        tableData: action.payload,
        tableDataError: ''
      };
    case 'FETHING_TABLE_DATA_FAILED':
      return {
        ...state,
        tableData: [],
        tableDataError: action.payload
      };
    case 'FETHING_TABLE_DATA_COMPLETED':
      return {
        ...state,
        tableDataInAction: false
      };

    /*  Bar Data reducer  */
    case 'FETHING_BAR_DATA_INITIATED':
      return {
        ...state,
        barDataInAction: true
      };
    case 'FETHING_BAR_DATA_SUCCESSFUL':
      return {
        ...state,
        barData: action.payload,
        barDataError: ''
      };
    case 'FETHING_BAR_DATA_FAILED':
      return {
        ...state,
        barData: [],
        barDataError: action.payload
      };
    case 'FETHING_BAR_DATA_COMPLETED':
      return {
        ...state,
        barDataInAction: false
      };

    /*  Pie Data reducer  */
    case 'FETHING_PIE_DATA_INITIATED':
      return {
        ...state,
        pieDataInAction: true
      };
    case 'FETHING_PIE_DATA_SUCCESSFUL':
      return {
        ...state,
        pieData: action.payload,
        pieDataError: ''
      };
    case 'FETHING_PIE_DATA_FAILED':
      return {
        ...state,
        pieData: [],
        pieDataError: action.payload
      };
    case 'FETHING_PIE_DATA_COMPLETED':
      return {
        ...state,
        pieDataInAction: false
      };
    default:
      return state;
  }
};
