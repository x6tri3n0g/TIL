var graph = {
    alice: ["bob", "claire"],
    bob: ["anuj", "peggy"],
    claire: ["thom", "jonny"],
    anuj: [],
    peggy: ["mango"],
    thom: [],
    jonny: [],
    mango: []
};
/**
 * BFS를 사용하여 최단 경로를 찾는 함수
 * @param graph - 그래프 (인접 리스트)
 * @param start - 시작 노드
 * @param target - 목표 노드
 * @returns 최단 경로 배열 또는 null (경로가 없는 경우)
 */
var searchShortestPath = function (graph, start, target) {
    var queue = [start];
    var visited = new Set();
    // 각 노드의 부모(이전 노드)를 추적
    var parent = new Map();
    visited.add(start);
    parent.set(start, null);
    while (queue.length > 0) {
        var current = queue.shift();
        if (!current)
            continue;
        // 목표 노드를 찾으면 경로를 재구성
        if (current === target) {
            var path = [];
            var node = target;
            // parent를 역추적하여 경로 재구성
            while (node !== null) {
                path.unshift(node); // 배열 앞에 추가
                node = parent.get(node) || null;
            }
            return path;
        }
        // 현재 노드의 인접 노드들을 탐색
        for (var _i = 0, _a = graph[current]; _i < _a.length; _i++) {
            var neighbor = _a[_i];
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
var result = searchShortestPath(graph, "alice", "mango");
if (result) {
    console.log("최단 경로:", result);
    console.log("최단 거리:", result.length - 1, "단계");
    console.log("경로 상세:", result.join(" → "));
}
else {
    console.log("경로를 찾을 수 없습니다.");
}
// 추가 테스트 케이스
console.log("\n=== 추가 테스트 ===");
console.log("alice → thom:", searchShortestPath(graph, "alice", "thom"));
console.log("alice → alice:", searchShortestPath(graph, "alice", "alice"));
