import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const BarChartComp = ({barData}) => {

    return (
      <div style={{width: "100%" , height: "450px"}}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={600}
          height={350}
          data={barData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis  dataKey="appSiteId" minTickGap={15} />
          <YAxis tickFormatter={(tickItem)=>`${tickItem}k`}/>
          <Tooltip formatter={(value, name, props) => parseInt(value*1000)}/>
          {/* <Legend align="right" verticalAlign="top" /> */}
          <Bar dataKey="impressions_offered" fill="#8884d8" />
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
}
export default BarChartComp
