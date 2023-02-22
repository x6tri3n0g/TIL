// JSON 값 사용하고 추가하기
const user = { name: 'xtring', age: 30 };
console.log('user: ', user);
console.log('user.name: ', user.name);
console.log('user.age: ', user.age);

user.job = 'front-end developer';
user.nation = 'Republic of Korea';
console.log(user);

const memberName = 'age';
console.log(user[memberName]);  // 30