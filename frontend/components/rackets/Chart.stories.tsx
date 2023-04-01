import Chart from "components/rackets/Chart";

export default {
  component: Chart,
};

export const Default = (args) => <Chart {...args} />;

Default.args = {
  isAnimationActive: false,
};
