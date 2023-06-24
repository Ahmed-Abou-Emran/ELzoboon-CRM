import React from 'react'
import MainLeadPage from "../components/Lead Management/MainLeadPage";
import "./LeadManagement.css"
import { Line } from 'react-chartjs-2';
import LeadReviewCard from '../components/Meeting item/LeadReviewCard'
import PieChart from "../components/reports/PieChart";
import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from "react";
import axios from "axios";





export const data3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [1,2,3],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [1,2,3],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};



const options = {
  responsive: true,
  maintainAspectRatio: false,
  width: "60%",
  height: "100%"
};
const LeadManagementPage = () => {

  const [line,setLine] = useState([])

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/leadsGraph")
      .then((response) => {

        console.log(response.data);
        setLine(response.data);
      });},
      []
    );
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'
    
    
      ,'August',
      'September', 
      'October',
      'November',
      'December'
    ],
      datasets: [
        {
          label: 'My First Dataset',
          data: line,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    };

    const x =  line.reduce((a, b) => a + b, 0)
    const data2 = {
      labels: ['Leads Count', 'Opportunities Count', 'Lead Lost Count'],
      datasets: [
        {
          label: '# of Votes',
          data: [x,x/2,x/4],
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
  return (
    <div className="leadsContainer">
    <div className="leftLeadsContainer">
    
    <LeadReviewCard 
    className="leftLeadsheadContainer" 
    
    Count = {(x/4)}
    Title="Opportunities Count"/>

    <LeadReviewCard className="leftLeadsheadContainer" 
 
    Title="Leads Count"
    Count = {x}
    />
    <LeadReviewCard className="leftLeadsheadContainer" 
     Count = {(x/10)}
    Title="Lead Lost Count"/>
    <div className="leftLeadsmidContainer">
    <MainLeadPage/>
    </div>
    <div className="leftLeadstableContainer">
    
    <Line 

    data={data} options={options}/>
    </div>
    </div>

    <div className="rightLeadsContainer">
      <h1 className="flexItem">Insights</h1>
      
      <div className="flexItem2"> 
      <PieChart sx={{
        width: "100%",
        height:"50%"
      }}  chartData={data2}/>
      </div>


    
      
     
      </div>

    </div>
  )
}

export default LeadManagementPage
