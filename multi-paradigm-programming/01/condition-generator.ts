function* conditionGenerator(condition: boolean) {
  yield 1;
  if (condition) {
    yield 2;
  }
  yield 3;
}

const iter = conditionGenerator(false);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

/** @description 실행 결과
 * { value: 1, done: false }
 * { value: 3, done: false }
 * { value: undefined, done: true }
 * { value: undefined, done: true }
 */
