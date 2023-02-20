// isNaN(number) : parameter가 숫자면 false 아니면 true, Not a Number

const isNaN123 = isNaN(123);
const isNaNMinus123 = isNaN(-123);
const isNaN234 = isNaN('234');
const isNaNHello = isNaN('Hello');

console.log('isNaN123:', isNaN123);
console.log('isNaNMinus123:', isNaNMinus123);
console.log('isNaN234:', isNaN234);
console.log('isNaNHello:', isNaNHello);