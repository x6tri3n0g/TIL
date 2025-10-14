/**
 * @description BFS: 너비 우선 탐색; 관계된 노드를 먼저 탐색하는 알고리즘
 * @param graph
 * @param start
 * @returns
 *
 * sudo code
 * 1. 시작 노드를 큐에 추가
 * 2. 큐가 비어있을 때까지 반복
 * 3. 큐에서 노드를 꺼내어 방문한 노드에 추가
 * 4. 현재 노드의 인접 노드를 큐에 추가
 * 5. 방문한 노드를 반환
 */

const graph = {
  a: ["b", "c"],
  b: ["a", "d"],
  c: ["a", "g"],
  d: ["b", "e", "f"],
  e: ["d"],
  f: ["d", "z", "y"],
  g: ["c", "h"],
};

function breadthFirstSearch(graph: Record<string, string[]>, start: string) {
  const queue = [start]; // 시작 노드를 큐에 추가
  const visited = new Set(); // 방문한 노드 저장

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current) continue; // 큐가 비어있으면 종료
    if (visited.has(current)) continue; // 방문한 노드면 종료
    visited.add(current); // 방문한 노드 추가
    queue.push(...graph[current]); // 현재 노드의 인접 노드를 큐에 추가
  }

  return visited;
}

console.log(breadthFirstSearch(graph, "a"));

/**!SECTION
 * @description 실행 방법
 * --lib es2015,dom 옵션 추가, 이유: Set 객체를 사용하기 위해
 * > tsc --lib es2015,dom ./data-structure/bfs/breadth-first-search.ts
 * > node ./data-structure/bfs/breadth-first-search.js
 */
