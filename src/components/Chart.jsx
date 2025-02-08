import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];

const COLORS = ["#5570F1", "#00C49F", "#FFCC91",];
const COLORS2 = ["#EEF0FA", "#EEF0FA", "#EEF0FA",];

const MyPieChart = () => {
  return (
 
      <ResponsiveContainer width="100%" height="100%">
        <PieChart >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={90}
            paddingAngle={5}
            dataKey="value"
            
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
            ))}
          </Pie>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={60}
            paddingAngle={5}
            dataKey="value"
            
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
            ))}
          </Pie>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
   
  );
};

export default MyPieChart;
