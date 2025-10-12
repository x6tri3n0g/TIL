/**
 * @description 재귀적 탐색을 위한 코드
 * @param box 탐색할 상자
 * @returns 열쇠 | null
 *
 * sudo code
 * 1. 상자 안을 확인한다.
 * 2. 만약 안에 상자가 있다면 1단계로 돌아간다.
 * 3. 만약 안에 열쇠가 있다면 종료한다.
 */
function lookForKey(box: any) {
  for (let item of box) {
    if (item.isKey()) {
      console.log("key found");
      return item;
    } else if (item.isBox()) {
      lookForKey(item); // 재귀적 호출
    }
  }
}
