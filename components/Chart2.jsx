import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { data } from "./Chart"; // Import the loan data

const colors = ["#ff8080", "#9560F9", "#006fca"];

// Compute total for the past 5 months
const totalPersonal = data.reduce((sum, entry) => sum + entry.Personal, 0);
const totalStudent = data.reduce((sum, entry) => sum + entry.Student, 0);
const totalBusiness = data.reduce((sum, entry) => sum + entry.Business, 0);

// Compute overall total
const totalLoans = totalPersonal + totalStudent + totalBusiness;

// Compute percentages and format values
export const data2 = [
  {
    name: "Personal Loans",
    value: totalPersonal,
    percentage: (totalPersonal / totalLoans) * 100,
  },
  {
    name: "Student Loans",
    value: totalStudent,
    percentage: (totalStudent / totalLoans) * 100,
  },
  {
    name: "Business Loans",
    value: totalBusiness,
    percentage: (totalBusiness / totalLoans) * 100,
  },
];

// Custom Label Function for PieChart
const customizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5; // Fix radius calculation
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  
  return (
    <text
      x={x}
      y={y}
      fill="black"
      fontSize={14}
      fontWeight="bold"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {`${(percent * 100).toFixed(2)}%`}
    </text>
  );
};

const Chart2 = () => {
  return (
    
    <div 
      style={{ 
        width: "100%", 
        height: "100%", 
        display: "flex", 
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <h3>Loan Allocation by Category (in %)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data2}
            dataKey="value"
            label={customizedLabel} // Ensures percentages stay inside the pie
            labelLine={false} // Removes external label lines
            outerRadius={100} // Adjust size of the pie
          >
            {data2.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `₦${value.toLocaleString()}`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart2;
