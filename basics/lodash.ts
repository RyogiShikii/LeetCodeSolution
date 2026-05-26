const debounce = <T extends (...args: any[]) => any>(fn: T, delay: number) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    //if timer already existed, then clear it
    if (timer) {
      clearTimeout(timer);
    }

    //set timer with delay
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const throttle = <T extends (...args: any[]) => any>(fn: T, delay: number) => {
  let lastTime = 0;

  return (...args: Parameters<T>) => {
    const now = Date.now();

    if (now - lastTime > delay) {
      fn(...args);
      lastTime = now;
    }
  };
};
