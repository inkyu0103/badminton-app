import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const HalfPieChart = ({ data, title, isAnimated = true }) => {
  return (
    <div className="w-[328px] h-[328px]  my-4 flex flex-col items-center justify-center gap-y-4 border-2">
      <p className="mb-2 text-xl font-bold">{title}</p>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Legend />
          <Pie
            animationBegin={isAnimated}
            outerRadius={100}
            innerRadius={70}
            startAngle={0}
            endAngle={180}
            paddingAngle={5}
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.filled} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HalfPieChart;
