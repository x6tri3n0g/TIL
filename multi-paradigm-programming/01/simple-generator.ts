function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const iter = generator();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

/** @description 실행 방법
 * > npx ts-node simple-generator.ts
 * { value: 1, done: false }
 * { value: 2, done: false }
 * { value: 3, done: false }
 */
