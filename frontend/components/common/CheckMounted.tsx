import { useEffect, useState } from "react";

const CheckMounted = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return children;
};

export default CheckMounted;
