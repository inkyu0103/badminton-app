import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const HalfPieChart = ({ data, title }) => (
  <div>
    <p className="mb-2 text-xl font-bold">{title}</p>
    <div className="border-2 w-mb h-mb">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip />
          <Legend />
          <Pie
            outerRadius={100}
            innerRadius={70}
            paddingAngle={5}
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.filled} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default HalfPieChart;
