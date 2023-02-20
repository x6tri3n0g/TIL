// 해당 문자열 찾기 indexOf(): index
// 해당 문자열이 있다면 문자열의 인덱스, 아니면 -1을 리턴

const string1 = 'hello';
const string2 = 'helelelelelelel';
const string3 = 'The method than selects elements from the start argument.';

console.log('hel:', string1.indexOf('hel'));
console.log('el:', string1.indexOf('el'));
console.log('elelelel:', string2.indexOf('el'));
console.log('method:', string3.indexOf('method'));
console.log('bye:', string3.indexOf('bye'));  // bye 라는 문자열은 없기 때문에 -1을 리턴한다