// 비교 연산자
const a = 5;
const b = 6;

if (a == 5) {
  console.log(a == 5);  // true
  console.log(a == b);  // false
  console.log(a == '5');  // true
}

if (a === 5) {
  console.log(a === 5);  // true
  console.log(a === b);  // false
  console.log(a === '5');  // false
}

if (a > b) {
  console.log(a > b);  // false
}

if (a < b) {
  console.log(a < b);  // true
}

if (a >= 5) {
  console.log(a >= 5)  // true;
  console.log(a > b);  // false
}

if (a <= 5) {
  console.log(a <= 5);  // true
  console.log(a <= b);  // true
}