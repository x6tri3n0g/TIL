// if - else if - else
const score = 85;
let degree = '';

if (score >= 90) {
  degree = 'A';
} else if (score >= 80) {
  degree = 'B';
} else if (score >= 60) {
  degree = 'C';
} else {
  degree = 'F';
}

console.log('degree: ', degree);