import React, { useState, useEffect, useMemo } from "react";
import { map, countBy } from "lodash";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const users = useSelector((state) => state.users);
  const [devCount, setDevCount] = useState(0);
  const [qaCount, setQaCount] = useState(0);
  const [jobNames, setjobNames] = useState([])

  // const [filteredUsers, setFilteredUsers] = useState([]);

  const jobTitles = map(users, (obj) => obj.jobTitle);

  useEffect(() => {
    // setFilteredUsers(users);
    // setDevCount(countBy(jobTitles).Developer);
    
    setDevCount(jobTitles.filter((el) => el === "Developer").length);
    
    setQaCount(countBy(jobTitles).QA);
  }, [users, jobTitles]);

  const dataChart = useMemo(() => {
    const data = {
      labels: ["Developer", "QA"],
      datasets: [
        {
          data: [devCount, qaCount],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 60, 235, 0.2)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    };
    return data;
  }, [devCount, qaCount]);

  return (
    <div className="pie-chart chart" data-testid="pieChart">
      <Pie data={dataChart} />
    </div>
  );
};
export default PieChart;
