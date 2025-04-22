
import React from 'react';
import './Chart.css'
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data with computed MonthlyTotal
export const data = [
    { month: "Oct", Personal: 6600, Student: 6000, Business: 2600 },
    { month: "Nov", Personal: 12000, Student: 3000, Business: 115000 },
    { month: "Dec", Personal: 74650, Student: 17090, Business: 1100 },
    { month: "Jan", Personal: 14050, Student: 8050, Business: 800 },
    { month: "Feb", Personal: 96550, Student: 50000, Business: 9000 },
];

// Compute MonthlyTotal for each entry
const processedData = data.map(entry => ({
    ...entry,
    MonthlyTotal: entry.Personal + entry.Student + entry.Business
}));

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const total = payload[0].payload.MonthlyTotal.toLocaleString();
    return (
      <div style={{ background: '#fff', padding: 10, border: '1px solid #ccc', borderRadius: 5 }}>
        {/* <p><strong>{label}</strong></p> */}
        {payload.map((item, index) => (
          <p key={index} style={{ color: item.color }}>{item.name}: {item.value.toLocaleString()}</p>
        ))}
        <p><strong>Monthly Total:</strong> {total}</p>
      </div>
    );
  }
  return null;
};

const Chart = () => {
  return (
    <div className="chart-container" style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={processedData}>
          <Area type="monotone" dataKey="Personal" stroke="rgb(0, 0, 0)" fill=" #000000" strokeWidth={3} />
          <Area type="monotone" dataKey="Student" stroke="rgb(0, 0, 0)" fill=" #000000" strokeWidth={3} />
          <Area type="monotone" dataKey="Business" stroke="rgb(0, 0, 0)" fill=" #000000" strokeWidth={3} />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis className='yAxis'/>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </div>

  );
};

export default Chart;
