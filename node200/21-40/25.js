// 논리 연산자(Logical Operator)

// true
// false
// false

// true
// true
// false

console.log(false || false); // false
// ||는 true boolean true 타입을 찾아 우향한다.
// 결국 false라면 false를 리턴

console.log(false && true); // false
// &&는 비교군 모두가 true인 경우 true를 리턴, 아닌 경우 false