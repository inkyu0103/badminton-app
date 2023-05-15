import { RacketStatisticsView } from "components/rackets/RacketStatistics";
import { IRacketStatisticsProps } from "interface/Statistics.interface";

export default {
  component: RacketStatisticsView,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Default = (args: IRacketStatisticsProps) => (
  <RacketStatisticsView {...args} />
);

Default.args = {
  reviewStatistics: undefined,
  handleChangeRank: () => {},
};

Default.argTypes = {
  handleChangeRank: { table: { disable: true } },
};
