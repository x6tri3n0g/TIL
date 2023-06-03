/* pop() 메서드를 쓰면서 읽기하는 함수를 만들어라

var a = [1, 2, 3, 4];
var b = a.pop();
console.log(b); // 4
console.log(a); // [1, 2, 3]
*/

const numberArray = [1, 2, 3, 4];

/* 1. 읽기 함수와 쓰기 함수로 분리하기 */
const removeLastElement = (array: number[]) => {
  const copiedArray = [...array];
  copiedArray.pop();
  return copiedArray;
}

console.log(removeLastElement(numberArray));

/* 값 두개를 리턴하는 함수로 만들기 */
const pop = (array: number[]) => {
  const copiedArray = [...array];
  const last = copiedArray.pop();
  return {
    last,
    array: copiedArray,
  }
}

console.log(pop(numberArray));