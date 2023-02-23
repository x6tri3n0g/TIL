// for문을 끝내는 break;
const studentList = [
  { name: 'xtring', age: 31, score: 85 },
  { name: 'hwang', age: 31, score: 95 },
  { name: 'hyun', age: 31, score: 76 },
  { name: 'juninij', age: 31, score: 94 },
];

let resultStudent = '';
for (let index = 0; index < studentList.length; index += 1) {
  if (studentList[index].name === 'juninij') {
    resultStudent = studentList[index];
    break;
  }

  console.log(studentList[index].name, '은 juninij이 아닙니다.');
}

console.log('resultStudent: ', resultStudent);