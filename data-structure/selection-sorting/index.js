var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// 가장 작은 원소를 찾는 함수
function findSmallestIndex(arr) {
    var smallest = arr[0];
    var smallestIndex = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}
// 선택 정렬 알고리즘을 통한 정렬 함수
function selectionSort(arr) {
    var newArr = [];
    var copiedArr = __spreadArray([], arr);
    for (var i = 0; i < arr.length; i++) {
        var smallestIndex_1 = findSmallestIndex(copiedArr);
        newArr.push(copiedArr[smallestIndex_1]);
        copiedArr.splice(smallestIndex_1, 1);
    }
    return newArr;
}
var arr = [5, 3, 6, 2, 10];
var smallestIndex = findSmallestIndex(arr);
console.log("smallestIndex", smallestIndex); // 3
var sortedArr = selectionSort(arr);
console.log("sortedArr", sortedArr); // [2, 3, 5, 6, 10]
