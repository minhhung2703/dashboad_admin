import React from "react";
import { Header } from "../../components";
import { BarChart } from "../../components";

const Bar = () => {
  return (
    <div className="flex-col m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Chart" title="Bar Chart" />
      <div className="h-72">
        <BarChart />
      </div>
    </div>
  );
};

export default Bar;
