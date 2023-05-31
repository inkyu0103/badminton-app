import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

const data = [
  {
    subject: "컨트롤s",
    A: 3,
    B: 4,
    fullMark: 5,
  },
  {
    subject: "힘 전달",
    A: 3,
    B: 2,
    fullMark: 5,
  },
  {
    subject: "무게",
    A: 3,
    B: 5,
    fullMark: 5,
  },
  {
    subject: "디자인",
    A: 3,
    B: 1,
    fullMark: 5,
  },
  {
    subject: "추천 정도",
    A: 3,
    B: 2,
    fullMark: 5,
  },
];

const Chart = ({ isAnimationActive = true }) => (
  <RadarChart outerRadius={90} width={328} height={328} data={data}>
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <Radar
      name="20대"
      dataKey="A"
      stroke="#8884d8"
      fill="#8884d8"
      fillOpacity={0.6}
      isAnimationActive={isAnimationActive}
    />
    <Radar
      name="30대"
      dataKey="B"
      stroke="#82ca9d"
      fill="#82ca9d"
      fillOpacity={0.6}
      isAnimationActive={isAnimationActive}
    />
    <Legend />
  </RadarChart>
);
export default Chart;
