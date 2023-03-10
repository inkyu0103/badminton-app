import { InputProps } from "interface/Input.interface";

const Input = ({
  type = "text",
  placeholder,
  isRequired = false,
  disabled = false,
}: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="w-full py-2 text-sm rounded-md outline outline-1 outline-blue-100 hover:outline-blue-200 indent-2"
      disabled={disabled}
      required={isRequired}
    />
  );
};

export default Input;
