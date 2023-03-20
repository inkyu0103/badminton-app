import { ComponentProps, Suspense, useEffect, useState } from "react";

const useMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return isMounted;
};

const SSRSuspense = (props: ComponentProps<typeof Suspense>) => {
  const isMounted = useMounted();

  if (isMounted) {
    return <Suspense {...props} />;
  }

  return <>{props.fallback}</>;
};
export default SSRSuspense;
