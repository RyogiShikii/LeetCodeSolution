//two pointers
function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  let sum;

  while (left < right) {
    sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  throw new Error("No solution found");
}
