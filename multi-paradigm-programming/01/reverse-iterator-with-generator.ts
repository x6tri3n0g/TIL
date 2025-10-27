function* reverse<T>(arrayLike: ArrayLike<T>) {
  let idx = arrayLike.length;
  while (idx) {
    yield arrayLike[--idx];
  }
}

const iter = reverse(["a", "b", "c", "d", "e"]);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
