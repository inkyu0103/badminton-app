import { ReactNode, useEffect, useState } from "react";

const CheckMounted = ({ children }: { children: ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return children;
};

export default CheckMounted;
