import { Bar, BarChart, Cell, Legend, ResponsiveContainer } from "recharts";

const SimpleBarChart = ({ data, title }) => {
  return (
    <div className="w-[328px] h-[328px]  my-4 flex flex-col items-center justify-center gap-y-4 border-2">
      <p className="mb-2 text-xl font-bold">{title}</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <Legend />
          <Bar dataKey="value" label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.filled} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default SimpleBarChart;
