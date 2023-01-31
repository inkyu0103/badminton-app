
import { RacketProps } from "interface/Racket.interface";
import Racket from "components/rackets/Racket";

export default {
  component: Racket,
};

export const Default = (args: RacketProps) => (
  <div className="flex">
    <Racket {...args} />
  </div>
);

Default.args={
  name:'Yonex Nanoray'
}