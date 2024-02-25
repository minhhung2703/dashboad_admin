import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

const BarCharts = () => {
  return (
    <BarChart
      className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl"
      data={barCustomSeries[0].dataSource}
      width={500}
      height={300}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={barCustomSeries[0].xName} />
      <YAxis />
      <Tooltip />
      <Legend />
      {barCustomSeries.map((series, index) => (
        <Bar
          key={index}
          dataKey={series.yName}
          name={series.name}
          fill={series.fill}
        />
      ))}
    </BarChart>
  );
};

export default BarCharts;
