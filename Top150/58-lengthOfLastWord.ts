function lengthOfLastWord(s: string): number {
  let arr = s.trim();

  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== " ") {
      count += 1;
    } else {
      break;
    }
  }

  return count;
}
