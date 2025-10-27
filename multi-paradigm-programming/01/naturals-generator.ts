function* naturalsGenerator() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const iter = naturalsGenerator();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

/** @description 실행 결과
 * { value: 0, done: false }
 * { value: 1, done: false }
 * { value: 2, done: false }
 * { value: 3, done: false }
 * // ...무한 실행...
 */
