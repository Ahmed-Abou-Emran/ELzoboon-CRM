import React from "react";
import BarChart from "../components/reports/BarChart";
import PieChart from "../components/reports/PieChart";
import  TaskForm  from "../components/forms/TaskForm";
import SalesForcasting from "../components/reports/SaleForcasting";
import { useState, useEffect } from "react";
import axios from "axios";
import { Line } from 'react-chartjs-2';
import "./reports.css"
import Button from '@mui/material/Button';
import logo from '../download.jpeg';
import TextField from '@mui/material/TextField';
import Moment from "moment"

import { useContext } from 'react';

import { userContext, salesForcast, Predict, Predict2} from '../user';


import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const Reports = () => {
  const [fetchcountry, setfetchcountry] = useState([]);
  const [fetchproductcount, setfetchproductcount] = useState([]);
  const [fetchproductmincount, setfetchproductmincount] = useState([]);
  const [fetchCustomerSegments, setfetchCustomerSegments] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/reports/countrycount")
      .then((response) => {
        console.log(response);
        setfetchcountry(response.data);
      });

     
    axios
    .get("http://127.0.0.1:8000/predict-sales", {params: {
      "start":  salesForcasting.start ,
      "end": salesForcasting.end 

  }} )
    .then((response) => {

      
     
      setLine(Object.values(response.data.Totalsales));
      setDate(Object.values(response.data.Date));
    })

    axios
      .get("http://127.0.0.1:8000/reports/productcount/")
      .then((response) => {
        console.log(response);
        setfetchproductcount(response.data);
      });

    axios
      .get("http://127.0.0.1:8000/reports/minproductcount/")
      .then((response) => {
        console.log(response);
        setfetchproductmincount(response.data);
      });

    axios
      .get("http://127.0.0.1:8000/reports/customersSegments/")
      .then((response) => {
        console.log(response);
        setfetchCustomerSegments(response.data);
      });
  }, []);

  useEffect(() => {
    setChartData({
      labels: fetchcountry.map((data) => data.country),
      datasets: [
        {
          label: "Users Gained ",
          data: fetchcountry.map((data) => data.count),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [fetchcountry]);

  useEffect(() => {
    setChartData2({
      labels: fetchproductcount.map((data) => data.description),
      datasets: [
        {
          label: "Users Gained ",
          data: fetchproductcount.map((data) => data.count),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [fetchproductcount]);

  useEffect(() => {
    setChartData3({
      labels: fetchproductmincount.map((data) => data.description),
      datasets: [
        {
          label: "Users Gained ",
          data: fetchproductmincount.map((data) => data.count),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [fetchproductmincount]);

  useEffect(() => {
    setChartData4({
      labels: fetchCustomerSegments.map((data) => data.label),
      datasets: [
        {
          label: "Users Gained ",
          data: fetchCustomerSegments.map((data) => data.the_count),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [fetchCustomerSegments]);

  const [chartData, setChartData] = useState({
    labels: fetchcountry.map((data) => data.country),
    datasets: [
      {
        label: "Users Gained ",
        data: fetchcountry.map((data) => data.count),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [chartData2, setChartData2] = useState(
    {
      labels: fetchproductcount.map((data) => data.description),
      datasets: [
        {
          label: "Users Gained ",
          data: fetchproductcount.map((data) => data.count),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    },
    []
  );

  const [chartData3, setChartData3] = useState(
    {
      labels: fetchproductmincount.map((data) => data.description),
      datasets: [
        {
          label: "Users Gained ",
          data: fetchproductmincount.map((data) => data.count),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    },
    []
  );

  const [chartData4, setChartData4] = useState(
    {
      labels: fetchCustomerSegments.map((data) => data.label),
      datasets: [
        {
          label: "Count ",
          data: fetchCustomerSegments.map((data) => data.count),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    },
    []
  );

  const [line,setLine] = useState([])
  const [date,setDate] = useState([])

  const [start,setStart] = useState("")
  const [end,setEnd] = useState("")

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
      labels: date,
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
  
const columns = [
  { field: 'leadId', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'middleName', headerName: 'Last name', width: 130 },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 100,
  }, { field: 'Phone', headerName: 'Phone', width: 200 },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'project', headerName: 'Project', width: 200 },
  
  
];

const options = {
  responsive: true,
  maintainAspectRatio: false,
  width: "60%",
};
const [data2, setData] = useState({})
const updateData = e => {


  console.log(e.target.name);
  console.log(e.target.value);
      setData({
        ...data2,
        [e.target.name]: e.target.value
    })

    setSalesForcasting({
      ...salesForcasting,
        [e.target.name]: e.target.value
  } )


}
const{ user, setUser} = useContext(userContext);
const{ salesForcasting, setSalesForcasting} = useContext(salesForcast);
const{ predict, setPredict} = useContext(Predict);
const{ predictSales, setPredictSales} = useContext(Predict2);

useEffect(() => {
console.log(user);

},[])


useEffect(() => {
  
 
    axios
    .get("http://127.0.0.1:8000/predict-sales", {params: {
      "start":  salesForcasting.start ,
      "end": salesForcasting.end 

  }} )
    .then((response) => {

      
     
      setLine(Object.values(response.data.Totalsales));
      setDate(Object.values(response.data.Date));
      setPredictSales(false)
    })
  
},
    [predictSales]
  );

  return (

    
    <div>
      
    
      
      <h1 className="head">Reports</h1>

      <div className="reportsContainer">
    
      <div className="rep1">
    
      <BarChart title={"Countries distribution"} chartData={chartData} />
      </div>
      <div className="rep2">
      <BarChart title={"top 10 items"} chartData={chartData2} />
      </div>
      <div className="rep3">
      <BarChart title={"lowest 10 times"} chartData={chartData3} />
      </div>
      <div className="rep4">
      <PieChart title={"CustomerSegments"} chartData={chartData4} />
      </div>

      <div className="head2">
   <h1 style={{width: "100%"}}>Data to forecast</h1>
<LocalizationProvider 

dateAdapter={AdapterDayjs}>
      <DemoContainer

      components={['DateField']}>
      <DatePicker
        name = "start"
        onChange={(newValue) => {
          console.log(newValue);
          setData({
          ...data2,
          ["start"]:  Moment(newValue.$d).format("YYYY-MM-DD")
      })
      setSalesForcasting({
          
          ["start"]:  Moment(newValue.$d).format("YYYY-MM-DD")
      } )
    
    
    }}

        sx={{
        '& .PrivatePickersYear-yearButton': {
          fontSize: '10px',
   },
          width:"100%",
          maxHeight: 50,
          backgroundColor:"white",     
                    borderColor: 'text.primary'
                  }}
 
        label="Start Date" />

      </DemoContainer>
    </LocalizationProvider>
    <LocalizationProvider 

dateAdapter={AdapterDayjs}>
      <DemoContainer

      components={['DateField']}>
      <DatePicker
        name = "end"
        onChange={(newValue) => { setData({
          ...data2,
          ["end"]: Moment(newValue).format("YYYY-MM-DD")
      })
      setSalesForcasting({
        ...salesForcasting,
        ["end"]:  Moment(newValue.$d).format("YYYY-MM-DD")
    } )
    
    }}

        sx={{
          maxHeight: 50,
          backgroundColor:"white",     

          borderColor: 'text.primary'
        }}
 
        label="End Date" />

      </DemoContainer>
    </LocalizationProvider>




    <TextField
    sx={{
      width:"50%", maxHeight: 50,

              }}
          id="standard-number"
          label="Unit Price"
          name= "UnitPrice"
          type="number"
          onChange={updateData}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />

<Button
sx={{
  width:"30%", maxHeight: 50,
  marginLeft: "auto",
  marginRight: "10%",
          }}
variant="contained" onClick={
  ()=>{

    setPredict(true)
  }
}>Forcast</Button>

{/*     
<LocalizationProvider 

dateAdapter={AdapterDayjs}>
      <DemoContainer
      sx={{
        gridRow: "3/3",
        gridColumn: "4/ 7",
        border: 1,
        borderColor: 'text.primary'
      }}
      components={['DateField']}>
      <DatePicker
        name = "date"
        value={value}
        onChange={(newValue) => {        setData({
          ...data,
          ["date"]: newValue
      })}}
        label="date picker" />

      </DemoContainer>
    </LocalizationProvider> */}
{/* 
      </div>
      <div className="head3">
   <h1 style={{width: "100%"}}>Data to forecast</h1>
<LocalizationProvider 

dateAdapter={AdapterDayjs}>
      <DemoContainer

      components={['DateField']}>
      <DatePicker
        name = "start"
        onChange={(newValue) => {
          console.log(newValue);
          setData({
          ...data2,
          ["start"]:  Moment(newValue.$d).format("YYYY-MM-DD")
      })
      setSalesForcasting({
          
          ["start"]:  Moment(newValue.$d).format("YYYY-MM-DD")
      } )
    
    
    }}

        sx={{
        '& .PrivatePickersYear-yearButton': {
          fontSize: '10px',
   },
          width:"100%",
          maxHeight: 50,
          backgroundColor:"white",     
                    borderColor: 'text.primary'
                  }}
 
        label="Start Date" />

      </DemoContainer>
    </LocalizationProvider>
    <LocalizationProvider 

dateAdapter={AdapterDayjs}>
      <DemoContainer

      components={['DateField']}>
      <DatePicker
        name = "end"
        onChange={(newValue) => { setData({
          ...data2,
          ["end"]: Moment(newValue).format("YYYY-MM-DD")
      })
      setSalesForcasting({
        ...salesForcasting,
        ["end"]:  Moment(newValue.$d).format("YYYY-MM-DD")
    } )
    
    }}

        sx={{
          maxHeight: 50,
          backgroundColor:"white",     

          borderColor: 'text.primary'
        }}
 
        label="End Date" />

      </DemoContainer>
    </LocalizationProvider>




    

<Button
key={1}
sx={{
  width:"30%", maxHeight: 50,
  marginLeft: "auto",
  marginRight: "10%",
          }}
variant="contained" onClick={
  ()=>{

    setPredictSales(true)
  }
}>Sales</Button> */}

{/*     
<LocalizationProvider 

dateAdapter={AdapterDayjs}>
      <DemoContainer
      sx={{
        gridRow: "3/3",
        gridColumn: "4/ 7",
        border: 1,
        borderColor: 'text.primary'
      }}
      components={['DateField']}>
      <DatePicker
        name = "date"
        value={value}
        onChange={(newValue) => {        setData({
          ...data,
          ["date"]: newValue
      })}}
        label="date picker" />

      </DemoContainer>
    </LocalizationProvider> */}

      </div>
      
      <div className="rep5">
      <h1 className="salesForHead">SaleForcasting</h1>
      <SalesForcasting
      url = "http://127.0.0.1:8000/predict"
      type={0}
      />
      </div>

     {/* <div className="rep6">
      <h1 className="salesForHead">SaleForcasting</h1> */}
      {/* <SalesForcasting
      url = "http://127.0.0.1:8000/predict-sales"
      type={1}
      /> */}
          {/* <div style={{minHeight:400}}> */}
    {/* <Line 

    data={data} options={options}/>
    </div>

      </div> */}

    </div>
    </div>
   
  );
};

export default Reports;

// Hibernating Customers
// Exceptional Customers
// Punctual Customers
// Recent Customers
