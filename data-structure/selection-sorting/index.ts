// 가장 작은 원소를 찾는 함수
function findSmallestIndex(arr: number[]) {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

// 선택 정렬 알고리즘을 통한 정렬 함수
function selectionSort(arr: number[]) {
  const newArr: number[] = [];
  const copiedArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    const smallestIndex = findSmallestIndex(copiedArr);
    newArr.push(copiedArr[smallestIndex]);
    copiedArr.splice(smallestIndex, 1);
  }

  return newArr;
}

const arr = [5, 3, 6, 2, 10];
const smallestIndex = findSmallestIndex(arr);
console.log("smallestIndex", smallestIndex); // 3

const sortedArr = selectionSort(arr);
console.log("sortedArr", sortedArr); // [2, 3, 5, 6, 10]
