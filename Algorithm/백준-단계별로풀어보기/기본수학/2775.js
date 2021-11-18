// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let count = input[0];
// let numbers = [];

// for (let i = 1; i < input.length; i++) {
// 	if (input[i] !== '') {
// 		numbers.push(input[i].split(' '));
// 	}
// }

// for (let i = 0; i < numbers.length; i++) {
// 	let t = Number(numbers[i][0]);
// 	let result = 0;

// 	for (let j = 0; j < t; j++) {
// 		let k = Number(numbers[i][j]);
// 		let n = Number(numbers[i][j]);

// 		for (let r = 1; r <= n; r++) {
// 			result += (k - 1) * i;
// 		}
// 	}
// 	console.log(result);
// }

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let testCase = 0;
let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	console.log(input);

	testCase = input[0];

	for (let i = 1; i <= testCase; i++) {
		const k = input[testCase - 1 + i];
		const n = input[testCase - 1 + i + 1];

		console.log(k);
		console.log(n);
		let result = 0;

		for (let r = 1; r <= n; r++) {
			result += (k - 1) * r;
		}

		// console.log(result);
	}

	process.exit();
});
