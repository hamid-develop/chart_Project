import React, { useState, useEffect } from "react";
import ChartWrapper from "../chartWrapper/ChartWrapper";

const ChartSelect = () => {
  const [chart, setChart] = useState("selectYourChart");

  const [pieChartVisible, setPieChartVisible] = useState(false);
  const [barChartVisible, setBarChartVisible] = useState(false);

  useEffect(() => {
    chart === "pieChart" ? setPieChartVisible(true) : setPieChartVisible(false);
    chart === "barChart" ? setBarChartVisible(true) : setBarChartVisible(false);
  }, [chart]);

  return (
    <div>
      <div>
        <select
          value={chart}
          onChange={(e) => setChart(e.target.value)}
        >
          <option value="selectChart">Select your chart please</option>
          <option value="pieChart">Pie chart</option>
          <option value="barChart">Bar chart</option>
        </select>
      </div>
      <ChartWrapper showPieChart={pieChartVisible} showBarChart={barChartVisible} />
    </div>
  );
};

export default ChartSelect;
