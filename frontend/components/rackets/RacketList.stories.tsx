import { RacketListView } from "components/rackets/RacketList";

export default {
  component: RacketListView,
};

export const Default = (args: any) => <RacketListView {...args} />;

Default.args = {
  curPage: 1,
  data: {
    count: 12,
    rackets: [{}],
  },
  brand: "yonex",
};
