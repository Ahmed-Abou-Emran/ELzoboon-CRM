import React from "react";
import Container from "../components/Calendar/CalendarContainer";
import MeetingItemsContainer from "../components/Meeting item/MeetingItemsContainer";
import TodoComponent from "../components/Todo/TodoComponent";
import "./calendarPage.css";
import PieChart from "../components/reports/PieChart";
import BarChart from "../components/reports/BarChart";

import { useState, useEffect } from "react";
import axios from "axios";
import image from "../improve-productivity.jpg"


export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
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
      borderWidth: 1,
    },
  ],
};

const meetingData = [
  { Title: "meeting", Creator: " abdelrahman", Description: " None" },
  { Title: "meeting2", Creator: " Karoem", Description: " None" },
  { Title: "meeting3", Creator: " Ahmed", Description: " None" },
];

const TaskData = [
  {
    Title: "Import data from csv",
    Creator: " abdelrahman",
    Description: " None",
  },
  { Title: "Call agent 1", Creator: " Karoem", Description: " None" },
  { Title: "Finish the report", Creator: " Ahmed", Description: " None" },
];



const options = {
  responsive: true,
  maintainAspectRatio: false,
  width: "60%",
  height: "100%"
};

function Card(Meeting) {
  return (
    <MeetingItemsContainer
      meetingTitle={Meeting.Title}
      Creator={Meeting.Creator}
      Description={Meeting.Description}
      color="#F1F6F9"
    />
  );
}

function todoTask(task) {
  const date2 = new Date(task.dueDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date2.toLocaleDateString('en-US', options);
  return (
    <MeetingItemsContainer
      meetingTitle={task.name}
      Creator={task.ownerName}
      Description={task.description}
      date = {formattedDate}
      taskid = {task.id}
      color="#F1F6F9"
    />
  );
}




const Calendar1 = () => {

  const [taskData, setTaskData] = useState([])
  const [graphDataTasks, setgraphDataTasks] = useState([])

  const data3 = {
    labels: Object.keys(graphDataTasks),
    datasets: [
      {
        label: 'Count',
        data: Object.values(graphDataTasks),
        backgroundColor: 'skyblue',
      },
      
    ],
  };
  useEffect(() => {

    axios.get("http://127.0.0.1:8000/users/tasks").then((response) => {
  
    setTaskData(response.data);
    
  });
  },[])

  useEffect(() => {
    const count = taskData.reduce((acc, curr) => {
      const date = curr.dueDate;
      const date2 = new Date(date);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = date2.toLocaleDateString('en-US', options);

      console.log(formattedDate);
      acc[formattedDate] ? acc[formattedDate]++ : (acc[formattedDate] = 1);
      return acc;
    }, {});
    console.log(count);
    setgraphDataTasks(count)
  },[taskData])

  return (
    <div className="container-c">
      <div className="container-left">
      <div className="second-calendar-item">

      <TodoComponent/>

      </div>

        <div className="container-left-items">
        



          <div className="container-meetings">

          <h1 className="heading">To-do Tasks</h1>
            {taskData.map(todoTask)}
          </div>
        </div>
      </div>

      <div className="container-right">
      
        <Container />
        <div className="chart">
        {/* <PieChart  chartData={data}/> */}
        {/* <img className="chart" src={image}/> */}
        <BarChart
        title = "Your TO-DO Tasks Number"
        chartData={data3} />
        </div>
      </div>
    </div>
  );
};

export default Calendar1;
