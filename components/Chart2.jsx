import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { data } from './Chart'; // Import the loan data

const colors = ["#ff8080", "#9560F9", "#006fca"];

// Compute total for the past 5 months
const totalPersonal = data.reduce((sum, entry) => sum + entry.Personal, 0);
const totalStudent = data.reduce((sum, entry) => sum + entry.Student, 0);
const totalBusiness = data.reduce((sum, entry) => sum + entry.Business, 0);

// Compute overall total
const totalLoans = totalPersonal + totalStudent + totalBusiness;

// Compute percentages and format values
export const data2 = [
  { name: "Personal", value: totalPersonal, percentage: (totalPersonal / totalLoans) * 100 },
  { name: "Student", value: totalStudent, percentage: (totalStudent / totalLoans) * 100 },
  { name: "Business", value: totalBusiness, percentage: (totalBusiness / totalLoans) * 100 },
];

const Chart2 = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data2}
            dataKey="value"
            label={({ name, value, percent }) =>
              `${name}: ₦${value.toLocaleString()} (${(percent * 100).toFixed(2)}%)`
            }
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
