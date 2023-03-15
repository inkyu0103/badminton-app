import { ForwardedRef, forwardRef } from "react";
import { InputProps } from "interface/Input.interface";

const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input
      {...props}
      ref={ref}
      className="w-full py-2 text-sm rounded-md outline outline-1 outline-blue-100 hover:outline-blue-200 indent-2"
    />
  ),
);

Input.displayName = "Input";

export default Input;
