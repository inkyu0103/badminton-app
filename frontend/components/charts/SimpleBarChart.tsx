import { Bar, BarChart, Cell, Legend, ResponsiveContainer } from "recharts";

const SimpleBarChart = ({ data, title }) => {
  console.log(data);
  return (
    <div>
      <p className="mb-2 text-xl font-bold">{title}</p>
      <div className="w-[328px] h-[328px]  my-4 flex flex-col items-center justify-center gap-y-4 border-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Legend
              payload={data.map((d) => ({ value: d.name, color: d.filled }))}
            />
            <Bar dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.filled} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default SimpleBarChart;
