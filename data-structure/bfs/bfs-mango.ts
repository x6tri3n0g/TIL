const graph: Record<string, string[]> = {
  alice: ["bob", "claire"],
  bob: ["anuj", "peggy"],
  claire: ["thom", "jonny"],
  anuj: [],
  peggy: ["mango"],
  thom: [],
  jonny: [],
  mango: [],
};

/**
 * BFS를 사용하여 최단 경로를 찾는 함수
 * @param graph - 그래프 (인접 리스트)
 * @param start - 시작 노드
 * @param target - 목표 노드
 * @returns 최단 경로 배열 또는 null (경로가 없는 경우)
 */
const searchShortestPath = (
  graph: Record<string, string[]>,
  start: string,
  target: string
) => {
  const queue = [start];
  const visited = new Set<string>();
  // 각 노드의 부모(이전 노드)를 추적
  const parent = new Map<string, string | null>();

  visited.add(start);
  parent.set(start, null);

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current) continue;

    // 목표 노드를 찾으면 경로를 재구성
    if (current === target) {
      const path: string[] = [];
      let node: string | null = target;

      // parent를 역추적하여 경로 재구성
      while (node !== null) {
        path.unshift(node); // 배열 앞에 추가
        node = parent.get(node) || null;
      }

      return path;
    }

    // 현재 노드의 인접 노드들을 탐색
    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        parent.set(neighbor, current);
        queue.push(neighbor);
      }
    }
  }

  // 경로를 찾지 못한 경우
  return null;
};

// 테스트
const result = searchShortestPath(graph, "alice", "mango");

if (result) {
  console.log("최단 경로:", result);
  console.log("최단 거리:", result.length - 1, "단계");
  console.log("경로 상세:", result.join(" → "));
} else {
  console.log("경로를 찾을 수 없습니다.");
}

// 추가 테스트 케이스
console.log("\n=== 추가 테스트 ===");
console.log("alice → thom:", searchShortestPath(graph, "alice", "thom"));
console.log("alice → alice:", searchShortestPath(graph, "alice", "alice"));

/**
 * @description 실행 방법
 * --lib es2015,dom 옵션 추가, 이유: Set 객체를 사용하기 위해
 * > tsc --lib es2015,dom ./data-structure/bfs/bfs-mango.ts
 * > node ./data-structure/bfs/bfs-mango.js
 *
 * @description 추가 테스트 케이스
 * > node ./data-structure/bfs/bfs-mango.js
 * > alice → thom: [ 'alice', 'claire', 'thom' ]
 * > alice → alice: [ 'alice' ]
 * >
 * > === 추가 테스트 ===
 * > alice → thom: [ 'alice', 'claire', 'thom' ]
 * > alice → alice: [ 'alice' ]
 */
