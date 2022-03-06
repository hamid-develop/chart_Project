import React, { useState, useEffect } from "react";
import "./pieChart.css"
import {useDispatch} from 'react-redux'
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
   
  ChartJS.register(
      ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


const PieChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
      });
    
      const [chartOptions, setChartOptions] = useState({});
     const dispatch = useDispatch()
      useEffect(() => {
        setChartData({
          labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
          datasets: [
            {
              data: [12, 55, 34, 48, 29,18,10],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 2,
            },
          ],
        })
        setChartOptions({
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Whom'st let the dogs out",
            },
          },
        });
      }, []);
    return ( 
        <div className="pie-container">
              <Pie data={chartData} options={chartOptions}  />
        </div>
     );
}
 
export default PieChart;