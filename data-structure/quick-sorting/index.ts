function quickSort(array: number[]) {
  if (array.length < 2) return array;
  const pivot = array[0];
  const less = array.slice(1).filter((item) => item <= pivot);
  const greater = array.slice(1).filter((item) => item > pivot);
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

const array = [10, 5, 2, 3, 7, 1, 8, 4, 6, 9];
console.log(quickSort(array));
