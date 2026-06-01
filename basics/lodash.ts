//debounce: only execute the function after delay milliseconds have passed since the last time it was invoked
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

//throttle: only execute the function at most once every delay milliseconds
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

//deepClone: create a deep copy of an object or array
const deepClone = <T>(obj: T, hash = new WeakMap()): T => {
  //JS typeof null => 'object'
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  //use weakMap to store processed obj, if the same object reference is encountered, the previously cloned result is returned directly to avoid infinite recursion.
  if (hash.has(obj as object)) {
    return hash.get(obj as object);
  }

  //create same tpye container
  const result: any = Array.isArray(obj) ? [] : {};

  //set the hash first
  hash.set(obj as object, result);

  for (const key in obj) {
    result[key] = deepClone((obj as any)[key], hash);
  }

  return result;
};

//groupBY: group elements of an array based on a specified key or function
const groupBy = <T>(arr: T[], fn: (item: T) => string | number) => {
  return arr.reduce<Record<string, T[]>>((accumulator, current) => {
    const key = String(fn(current));

    //if key not exist, create [] for this key
    if (!accumulator[key]) {
      accumulator[key] = [];
    }

    //push value into accumulator[key]
    accumulator[key].push(current);

    return accumulator;
  }, {});
};
