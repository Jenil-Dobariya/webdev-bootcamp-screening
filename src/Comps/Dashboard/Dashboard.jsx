import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

import "./style.css";

Chart.register(CategoryScale);

const Dashboard = () => {
  const data = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        data: [10, 15, 8, 12],
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        borderWidth: 2,
        fill: false, // Set to false to only show the line
        tension: 0.4, // Add this line to enable cubic interpolation
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: false, // Hide the X-axis (labels)
      },
      y: {
        display: false, // Hide the Y-axis (labels)
      },
    },
    elements: {
      point: {
        radius: 0, // Hide data points on the line
      },
      line: {
        borderWidth: 1, // Set the line width to 1
        tension: 0.4, // Set the line tension to 0.4 (cubic interpolation)
      },
    },
  };

  const data1 = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Sample Data",
        backgroundColor: "rgb(255, 161, 19)",
        borderColor: "rgb(255, 161, 19)",
        borderWidth: 1,
        data: [12, 19, 3, 5, 2, 3],
      }
    ]
  };

  // Configuration options to hide elements
  const options1 = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false, // Hide the X-axis (labels)
      },
      y: {
        display: false, // Hide the Y-axis (labels)
      }
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      }
    }
  };

  const labels2 = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];
  const data2 = {
    blueData: [12, 19, 3, 5, 2],
    greenData: [8, 15, 5, 10, 6]
  };

  // Create two datasets (blue and green)
  const datasets2 = [
    {
      label: "Blue Bars",
      backgroundColor: "rgba(75, 192, 192, 1)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      data: data2.blueData,
    },
    {
      label: "Green Bars",
      backgroundColor: "rgba(0, 128, 0, 1)",
      borderColor: "rgba(0, 128, 0, 1)",
      borderWidth: 1,
      data: data2.greenData,
    }
  ];

  // Configuration options
  const options2 = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const data3 = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: ["red", "blue", "yellow", "green", "purple"],
      }
    ]
  };

  // Configuration options
  const options3 = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div id="dashboard">
      <div className="dashboardGrid">
        <div id="col1">
          <div id="col1row1" className="grid-item">
            <h3>Welcome to your dashboard!</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eos in officiis illo pariatur asperiores optio dolorum aperiam minus. Eaque dolore, itaque molestiae harum dolorum impedit quis pariatur eligendi cupiditate!
          </div>
          <div id="col1row2">
            <div id="col1row1col1" className="grid-item">
              <div className="line-chart-t">
                <p>Chart Title</p>
                <h3>2643</h3>
                <p>yesterday</p>
              </div>
              <div className="line-chart">
                <Line data={data} options={options}/>
              </div>
            </div>
            <div id="col1row1col2" className="grid-item">
              <div className="line-chart-t">
                <p>Chart Title</p>
                <h3>2643</h3>
                <p>yesterday</p>
              </div>
              <div className="line-chart">
                <Line data={data} options={options} />
              </div>
            </div>
          </div>
          <div id="col1row3" className="grid-item">
          <Bar data={{ labels: labels2, datasets: datasets2 }} options={options2} height={"50%"}/>
          </div>
        </div>
        <div id="col2">
          <div id="col2row1" className="grid-item">
          <div style={{ width: '80%', margin: '0 auto' }}>
      <Bar data={data1} options={options1} />
    </div>
          </div>
          <div id="col2row2" className="grid-item">
            <div className="line-chart-t">
              <p>Chart Title</p>
              <h3>2643</h3>
              <p>yesterday</p>
            </div>
            <div className="line-chart">
              <Line data={data} options={options}/>
            </div>
          </div>
          <div id="col2row3" className="grid-item">
          <Pie data={data3} options={options3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
