// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(N) {
    var binaryString = N.toString(2); // 숫자를 2진수 문자열로 변환
    var gaps = binaryString.split("1").slice(0, -1);
    var maxGap = Math.max.apply(Math, gaps.map(function (gap) { return gap.length; }));
    return maxGap;
}
console.log(solution(1041)); // 5
