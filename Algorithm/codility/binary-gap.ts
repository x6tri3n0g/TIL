// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N: number): number {
  const binaryString = N.toString(2); // 숫자를 2진수 문자열로 변환
  const gaps = binaryString.split("1").slice(0, -1);
  const maxGap = Math.max(...gaps.map((gap) => gap.length));
  return maxGap;
}

console.log(solution(1041)); // 5
