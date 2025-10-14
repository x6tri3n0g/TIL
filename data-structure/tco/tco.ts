/** TCO
 * @description Tail Call Optimization, 꼬리 재귀 최적화: 함수형 프로그래밍에서 재귀 호출을 최적화하는 기술
 * 함수의 마지막 연산이 재귀 호출인 경우, 스택 메모리를 절약하고 성능을 향상시키는 기술`
 * @param num
 * @param acc
 * @returns
 *
 * sudo code
 * 1. 만약 num이 0이면 acc를 반환한다.
 * 2. 그렇지 않으면 num과 acc를 곱하고 그 결과를 반환한다.
 */
function fatorial(num: number, acc: number = 1) {
  if (num === 0) return acc;
  return fatorial(num - 1, acc * num);
}

const number = 5;
console.log(`${number}! = ${fatorial(number)}`);
