function binarySearch(arr: number[], target: number): number | null {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}

const result = binarySearch([1, 2, 3, 4, 5], 3);
console.log(result); // 2
