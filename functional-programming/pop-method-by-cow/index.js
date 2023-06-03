/* pop() 메서드를 쓰면서 읽기하는 함수를 만들어라

var a = [1, 2, 3, 4];
var b = a.pop();
console.log(b); // 4
console.log(a); // [1, 2, 3]
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var numberArray = [1, 2, 3, 4];
/* 1. 읽기 함수와 쓰기 함수로 분리하기 */
var removeLastElement = function (array) {
    var copiedArray = __spreadArray([], array);
    copiedArray.pop();
    return copiedArray;
};
var removedlastElementArray = removeLastElement(numberArray);
console.log(removedlastElementArray);
