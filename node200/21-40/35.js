// Array.forEech()
const listUser = [
  { name: 'xtring', age: 30 },
  { name: 'hyubn', age: 30 },
  { name: 'hwang', age: 30 },
  { name: 'jininij', age: 30 },
];

listUser.forEach(function(user) {
  console.log(user);
});

console.log('-------------------------');
listUser.forEach(user => console.log(user));