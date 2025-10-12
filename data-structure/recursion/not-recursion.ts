/**
 * @description 비 재귀적 탐색을 위한 코드
 * @param box 탐색할 상자
 * @returns 열쇠 | null
 *
 * sudo code
 * 1. 내부를 확인할 상들을 쌓아 놓는다.
 * 2. 상자를 하나씩 확인한다.
 * 3. 만약 안에 상자가 있다면 꺼내어 확인하지 않은 상자 더미에 놓는다.
 * 4. 만약 안에 열쇠가 있다면 종료한다.
 * 5. 반복한다.
 */
function makeAPileToLookThrough(box: any) {
  return box;
}

function lookForKey(box: any) {
  const pile = makeAPileToLookThrough(box);

  while (pile.length > 0) {
    const box = pile.grabANextBox();
    for (let item of box) {
      if (item.isKey()) {
        console.log("key found");
        return item;
      } else if (item.isBox()) {
        pile.add(item);
      }
    }
  }

  return null;
}
