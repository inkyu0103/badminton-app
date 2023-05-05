import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const SimpleBarChart = ({ data, title }) => {
  return (
    <div>
      <p className="mb-2 text-xl font-bold">{title}</p>
      <div className="border-2 w-mb h-mb">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <Legend
              payload={data.map((d) => ({ value: d.name, color: d.filled }))}
            />

            <Tooltip
              formatter={(value) => `${value}명`}
              labelFormatter={(value) => `${value} 좋아요`}
              payload={data.map((d) => ({
                name: d.name,
                value: d.value,
              }))}
            />
            <Bar dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.filled} />
              ))}
              <LabelList dataKey="value" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default SimpleBarChart;
