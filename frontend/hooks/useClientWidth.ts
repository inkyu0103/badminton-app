import { useEffect, useState } from "react";
import { debounce } from "utils/debounce";

const useClientWidth = (): number => {
  const [clientWidth, setClientWidth] = useState<number>(
    document.documentElement.clientWidth,
  );

  const handleResize = () => {
    setClientWidth(document.documentElement.clientWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", debounce(handleResize));
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return clientWidth;
};
export default useClientWidth;
