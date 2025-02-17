// import React from 'react';
// import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const MonthlyTotal = data.month(Personal+Student+Business);

// export const data = [
//     {month: "Oct", Personal: 6600, Student: 6000, Business: 2600, MonthlyTotal: MonthlyTotal},
//     {month: "Nov", Personal: 12000, Student: 3000, Business: 115000},
//     {month: "Dec", Personal: 74650, Student: 17090, Business: 1100},
//     {month: "Jan", Personal: 14050, Student: 1450, Business: 800},
//     {month: "Feb", Personal: 96550, Student: 1300, Business: 9000},
// ];



// const Chart = () => {
//   return (
//     <div style={{ width: '100%', height: 200 }}> 
//       <ResponsiveContainer width="100%" height="100%">
//         <AreaChart data={data}>
//           <Area type='monotone' dataKey='Personal' stroke='#7c0051' fill='#7c0051' strokeWidth={3} />
//           <Area type='monotone' dataKey='Student' stroke='#714b00' fill='#ffaa64' strokeWidth={3} />
//           <Area type='monotone' dataKey='Business' stroke='#9560F9' fill='#9F9CEF' strokeWidth={3} />
//           <Area type='monotone' dataKey='MonthlyTotal'/>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey='month' />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default Chart;



// import React from 'react';
// import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // Data with computed MonthlyTotal
// export const data = [
//     { month: "Oct", Personal: 6600, Student: 6000, Business: 2600 },
//     { month: "Nov", Personal: 12000, Student: 3000, Business: 115000 },
//     { month: "Dec", Personal: 74650, Student: 17090, Business: 1100 },
//     { month: "Jan", Personal: 14050, Student: 1450, Business: 800 },
//     { month: "Feb", Personal: 96550, Student: 1300, Business: 9000 },
// ];

// // Compute MonthlyTotal for each entry
// const processedData = data.map(entry => ({
//     ...entry,
//     MonthlyTotal: entry.Personal + entry.Student + entry.Business
// }));

// const Chart = () => {
//   return (
//     <div style={{ width: '100%', height: 300 }}> {/* Increased height for better visibility */}
//       <ResponsiveContainer width="100%" height="100%">
//         <AreaChart data={processedData}>
//           <Area type="monotone" dataKey="Personal" stroke="#005614" fill="#28a745" strokeWidth={3} />
//           <Area type="monotone" dataKey="Student" stroke="#9560F9" fill="#9F9CEF" strokeWidth={3} />
//           <Area type="monotone" dataKey="Business" stroke="#001ba1" fill="#006fca" strokeWidth={3} />
//           <Area type="monotone" dataKey="MonthlyTotal" stroke="#ff0000" fill="#ff8080" strokeWidth={3} />
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default Chart;




import React from 'react';
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
    const total = payload[0].payload.MonthlyTotal;
    return (
      <div style={{ background: '#fff', padding: 10, border: '1px solid #ccc', borderRadius: 5 }}>
        {/* <p><strong>{label}</strong></p> */}
        {payload.map((item, index) => (
          <p key={index} style={{ color: item.color }}>{item.name}: {item.value}</p>
        ))}
        <p><strong>Monthly Total:</strong> {total}</p>
      </div>
    );
  }
  return null;
};

const Chart = () => {
  return (
    <div style={{ width: '100%', height: 300 }}> {/* Increased height for better visibility */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={processedData}>
          <Area type="monotone" dataKey="Personal" stroke="#ff0000" fill="#ff8080" strokeWidth={3} />
          <Area type="monotone" dataKey="Student" stroke="#9560F9" fill="#9F9CEF" strokeWidth={3} />
          <Area type="monotone" dataKey="Business" stroke="#001ba1" fill="#006fca" strokeWidth={3} />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
