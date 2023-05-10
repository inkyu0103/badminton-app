
import Racket from "components/rackets/Racket";
import { RacketProps } from "interface/Racket.interface";

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