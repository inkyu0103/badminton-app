export const debounce = (func: any) => {
  let timer: ReturnType<typeof setTimeout>;

  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(func, 200);
  };
};
