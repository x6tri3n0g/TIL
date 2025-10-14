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
var graph = {
    a: ["b", "c"],
    b: ["a", "d"],
    c: ["a", "g"],
    d: ["b", "e", "f"],
    e: ["d"],
    f: ["d", "z", "y"],
    g: ["c", "h"]
};
function breadthFirstSearch(graph, start) {
    var queue = [start]; // 시작 노드를 큐에 추가
    var visited = new Set(); // 방문한 노드 저장
    while (queue.length > 0) {
        var current = queue.shift();
        if (!current)
            continue; // 큐가 비어있으면 종료
        if (visited.has(current))
            continue; // 방문한 노드면 종료
        visited.add(current); // 방문한 노드 추가
        queue.push.apply(// 방문한 노드 추가
        queue, graph[current]); // 현재 노드의 인접 노드를 큐에 추가
    }
    return visited;
}
console.log(breadthFirstSearch(graph, "a"));
// tsc --lib es2015,dom ./data-structure/bfs/breadth-first-search.ts
