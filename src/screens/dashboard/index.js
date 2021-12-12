import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDateRange,
  fetchBarData,
  fetchPieData,
  fetchTableData
} from 'thunks/dashboard';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Snackbar } from '@material-ui/core';
import Calendar from 'containers/dashboard/Calendar';
import PieChartComp from 'containers/dashboard/PieChart';
import BarChart from 'containers/dashboard/BarChart';
import Table from 'containers/dashboard/Table';
import Loader from 'components/ui-components/loader';
import NotFound from 'components/ui-components/notFound';
import { table_payload, pie_payload, bar_payload } from 'config/constants';

import './styles.scss';

const useStyles = makeStyles({
  root: {
    '& .MuiInputBase-root, .Mui-disabled': {
      borderRadius: 0,
      background: '#ECF6F9',

      '& :hover': {
        background: '#ECF6F9'
      },

      '& .MuiFilledInput-inputMarginDense': {
        background: '#ECF6F9',
        paddingTop: 7,
        paddingBottom: 7,
        height: 35
      }
    }
  }
});

const Dashboard = (props) => {
  const {
    dateRangeInAction,
    dateRange,
    tableData,
    tableDataInAction,
    barData,
    barDataInAction,
    pieData,
    pieDataInAction
  } = useSelector((state) => ({
    dateRangeInAction: state.dashboard.dateRangeInAction,
    dateRange: state.dashboard.dateRange,
    tableData: state.dashboard.tableData,
    tableDataInAction: state.dashboard.tableDataInAction,
    barData: state.dashboard.barData,
    barDataInAction: state.dashboard.barDataInAction,
    pieData: state.dashboard.pieData,
    pieDataInAction: state.dashboard.pieDataInAction
  }));
  const [value, setValue] = useState([dateRange.startDate, dateRange.endDate]);
  const [isClicked, setIsClicked] = useState(false);

  const classes = useStyles();
  const dispatch = useDispatch();
  const user_token = localStorage.user_token;
  useEffect(() => {
    const payload = {
      organization: 'DemoTest',
      view: 'Auction'
    };
    user_token && dispatch(fetchDateRange(payload, user_token));
  }, [user_token]);

  useEffect(() => {
    Object.values(dateRange).length &&
      setValue([dateRange.startDate, dateRange.endDate]);
  }, [dateRange]);

  const handleClick = () => {
    const dateObj = {
      startDate: `${new Date(value[0]).getTime()}`,
      endDate: `${new Date(value[1]).getTime()}`
    };
      
    table_payload.chartObject.requestParam.dateRange = dateObj;
    bar_payload.chartObject.requestParam.dateRange = dateObj;
    pie_payload.chartObject.requestParam.dateRange = dateObj;
    dispatch(fetchTableData(table_payload));
    dispatch(fetchBarData(bar_payload));
    dispatch(fetchPieData(pie_payload));
    setIsClicked(true);
  };

  if (dateRangeInAction) {
    return <Loader />;
  }

  if (!Object.values(dateRange).length) {
    return <NotFound color="#000" text="Date Range Data Not Found!" />;
  }

  const RenderPieChart = () => {
    if (pieDataInAction) return <Loader />;
    if (!Boolean(pieData.length))
      return <NotFound color="#000" text="Pie Chart Data Not Found!" />;
    return <PieChartComp pieData={pieData} />;
  };

  const RenderBarChart = () => {
    if (barDataInAction) return <Loader />;
    if (!Boolean(barData.length))
      return <NotFound color="#000" text="Bar Chart Data Not Found!" />;
    return <BarChart barData={barData} />;
  };

  const RenderTableChart = () => {
    if (tableDataInAction) return <Loader />;
    if (!Boolean(tableData.length))
      return <NotFound color="#000" text="Table Data Not Found!" />;
    return <Table tableData={tableData} />;
  };

  return (
    <div className="dashboard-container">
      <div className="date-range">
        <div className="calendar">
          <Calendar value={value} setValue={setValue} dateRange={dateRange} />
        </div>
        <div className="btn">
          <Button
            type="button"
            variant="contained"
            color="primary"
            disabled={new Date(value[0]).getTime() < new Date(dateRange.startDate).getTime() ||
              new Date(value[1]).getTime() > new Date(dateRange.endDate).getTime()}
            onClick={handleClick}>
            VIEW DASHBOARD
          </Button>
        </div>
      </div>
      {isClicked ? (
        <div className="charts">
          <div className="combined-charts">
            <div className="pie-chart">
              <RenderPieChart />
            </div>
            <div className="bar-chart">
              <RenderBarChart />
            </div>
          </div>
          <div className="table-chart">
            <RenderTableChart />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
