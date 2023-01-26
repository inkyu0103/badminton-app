const Input = ({
  type = "text",
  placeholder,
}: {
  type: string;
  placeholder?: string;
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="py-2 outline outline-1 outline-blue-100 rounded-md hover:outline-blue-200 text-sm indent-2"
    />
  );
};

export default Input;
