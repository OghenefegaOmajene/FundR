import React from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Rectangle } from 'recharts'


const data = [
  {month: "November", loan: 100000},
  {month: "December", loan: 200000},
  {month: "January", loan: 1000000},
  {month: "February", loan: 50000}
];

const Chart = () => {

  return (
    <div>
        <BarChart width={400} height={200} data={data} >
          <Bar 
            dataKey='loan' 
            fill="#9560F9" 
            radius={[10, 10, 0, 0]}
            activeBar={<Rectangle fill="palevioletred" stroke='#E79BE3'/>}/>
          {/* <CartesianGrid strokeDashoffset="3 3"></CartesianGrid> */}
          <XAxis dataKey='month'></XAxis>
          <YAxis></YAxis>
          <Tooltip cursor={{fill: "transparent"}}></Tooltip>
        </BarChart>
    </div>
  )
}

export default Chart