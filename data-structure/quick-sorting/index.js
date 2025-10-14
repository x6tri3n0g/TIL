var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function quickSort(array) {
    if (array.length < 2)
        return array;
    var pivot = array[0];
    var less = array.slice(1).filter(function (item) { return item <= pivot; });
    var greater = array.slice(1).filter(function (item) { return item > pivot; });
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(less)), [pivot]), quickSort(greater));
}
var array = [10, 5, 2, 3, 7, 1, 8, 4, 6, 9];
console.log(quickSort(array));
