import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Sept 11", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Sept 12", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Sept 13", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Sept 14", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Sept 15", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Sept 16", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Sept 17", uv: 3490, pv: 4300, amt: 2100 },
];

const MyBarChart = () => {
  return (
    
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          barSize={15} // Bar'larning o'lchamini oshirdim
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 20, right: 20 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#5570F1" background={{ fill: "#EEF0FA",  }} />
        </BarChart>
      </ResponsiveContainer>
    
  );
};

export default MyBarChart;
