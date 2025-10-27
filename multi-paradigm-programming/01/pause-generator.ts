function* pauseGenerator() {
  yield 1;
  console.log("hi");
  yield 2;
  yield 3;
}

const iter = pauseGenerator();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

/** @description 실행 결과
 * { value: 1, done: false }
 * hi
 * { value: 2, done: false }
 * { value: 3, done: false }
 * { value: undefined, done: true }
 */
