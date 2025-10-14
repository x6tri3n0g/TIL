/** TCO
 * @description Tail Call Optimization
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
