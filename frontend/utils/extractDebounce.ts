/* eslint-disable */
export const extractDebounce = (func: any, time = 200) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: unknown[]) => {
    if (timer) {
      clearTimeout(timer);
    }

    return new Promise((resolve, reject) => {
      timer = setTimeout(async () => {
        try {
          const result = await func(...args);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, time);
    });
  };
};
