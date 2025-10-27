function* yieldArrayGenerator() {
  yield 1;
  yield* [2, 3];
  yield 4;
}

const iter = yieldArrayGenerator();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

/** @description 실행 결과
 * { value: 1, done: false }
 * { value: 2, done: false }
 * { value: 3, done: false }
 * { value: 4, done: false }
 * { value: undefined, done: true }
 */
