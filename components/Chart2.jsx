import React from 'react'
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export const data = [
    {month: "Oct", Opay: 6600, PalmPay: 6000, MoniePoint: 2600},
    {month: "Nov", Opay: 12000, PalmPay: 3000, MoniePoint: 115000},
    {month: "Dec", Opay: 74650, PalmPay: 17090, MoniePoint: 1100},
    {month: "Jan", Opay: 14050, PalmPay: 1450, MoniePoint: 800},
    {month: "Feb", Opay: 9650, PalmPay: 1300, MoniePoint: 9000},
  ];
  
const Chart2 = () => {
  return (
    <AreaChart width={600} height={200} data={data}>
        <Area type='monotone' dataKey='Opay' stroke='#7c0051'  fill='#7c0051' strokeWidth={3}></Area>
        <Area type='monotone' dataKey='PalmPay' stroke='#714b00' fill='#ffaa64' strokeWidth={3}></Area>
        <Area type='monotone' dataKey='MoniePoint' stroke='#9560F9' fill='#9F9CEF' strokeWidth={3}></Area>
        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
        <XAxis dataKey='month'></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
    </AreaChart>
  )
}

export default Chart2