const twoSum = (nums: number[], target: number): number[] => {
  const hash = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (hash.has(diff)) {
      return [hash.get(diff)!, i];
    }

    hash.set(nums[i], i);
  }

  return [];
};
