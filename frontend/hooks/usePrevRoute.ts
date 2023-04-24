import { useRouter } from "next/router";
import { useEffect } from "react";

const usePrevRoute = () => {
  const router = useRouter();
  useEffect(storePathValues, [router.asPath]);
};

// strict 모드가 true인 상태 + 외부에서 접근하는 경우 렌더링이 2번되는 현상 때문에, 원하지 않는 결과가 발생할 수 있습니다.
const storePathValues = () => {
  const storage = sessionStorage;

  if (!storage) return;

  const prevPath = sessionStorage.getItem("currentPath");

  prevPath
    ? sessionStorage.setItem("prevPath", prevPath)
    : sessionStorage.setItem("prevPath", "/");

  const url = location.pathname + location.search;

  storage.setItem("currentPath", url);
};

export default usePrevRoute;
