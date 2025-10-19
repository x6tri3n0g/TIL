var FILE_DIRECTORY_DFS = {
    name: "src",
    type: "directory",
    children: [
        {
            name: "index.js",
            type: "file"
        },
        {
            name: "utils.js",
            type: "file"
        },
        {
            name: "components",
            type: "directory",
            children: [
                {
                    name: "components.js",
                    type: "file"
                },
            ]
        },
        {
            name: "pages",
            type: "directory",
            children: [
                {
                    name: "pages.js",
                    type: "file"
                },
            ]
        },
        {
            name: "styles",
            type: "directory",
            children: [
                {
                    name: "styles.css",
                    type: "file"
                },
            ]
        },
    ]
};
/**
 * @description DFS 방식으로 파일 트리를 순회하는 함수 (개선 전)
 * 문제점: 파일명만 출력되고 경로를 알 수 없음
 */
function searchFileDFS_OLD(directory) {
    for (var _i = 0, _a = directory.children || []; _i < _a.length; _i++) {
        var child = _a[_i];
        if (child.type === "file") {
            console.log(child.name);
        }
        else {
            searchFileDFS_OLD(child);
        }
    }
}
/**
 * @description DFS 방식으로 파일 트리를 순회하는 함수 (개선 버전)
 * 전체 경로를 추적하면서 깊이 우선 탐색
 */
function searchFileDFS(node, path) {
    if (path === void 0) { path = ""; }
    var currentPath = path ? path + "/" + node.name : node.name;
    // 현재 노드 출력
    if (node.type === "file") {
        console.log("[DFS - FILE] " + currentPath);
        return;
    }
    console.log("[DFS - DIR]  " + currentPath + "/");
    // 자식 노드들을 재귀적으로 탐색 (깊이 우선)
    for (var _i = 0, _a = node.children || []; _i < _a.length; _i++) {
        var child = _a[_i];
        searchFileDFS(child, currentPath);
    }
}
/**
 * @description DFS 방식으로 모든 파일 경로를 수집하는 함수
 */
function collectAllFilesDFS(node, path) {
    if (path === void 0) { path = ""; }
    var currentPath = path ? path + "/" + node.name : node.name;
    var files = [];
    if (node.type === "file") {
        return [currentPath];
    }
    // 디렉토리면 모든 자식의 파일을 수집
    for (var _i = 0, _a = node.children || []; _i < _a.length; _i++) {
        var child = _a[_i];
        files.push.apply(files, collectAllFilesDFS(child, currentPath));
    }
    return files;
}
// 실행
console.log("=== ❌ 개선 전 (파일명만 출력) ===");
searchFileDFS_OLD(FILE_DIRECTORY_DFS);
console.log("\n=== ✅ 개선 후 (전체 경로 출력) ===");
searchFileDFS(FILE_DIRECTORY_DFS);
console.log("\n=== 📁 파일 경로 수집 (DFS 방식) ===");
var allFiles = collectAllFilesDFS(FILE_DIRECTORY_DFS);
allFiles.forEach(function (file, index) {
    console.log(index + 1 + ". " + file);
});
console.log("\n -> \uCD1D " + allFiles.length + "\uAC1C \uD30C\uC77C \uBC1C\uACAC");
/**
 * @description 실행 방법
 * > tsc --lib es2015,dom ./data-structure/dfs/recursion-file-search.ts
 * > node ./data-structure/dfs/recursion-file-search.js
 *
 * @description DFS (깊이 우선 탐색) 특징
 * - 재귀 함수를 사용하여 구현
 * - 한 디렉토리를 완전히 탐색한 후 다음 디렉토리로 이동
 * - 스택 기반 (재귀 호출 스택)
 * - 시간 복잡도: O(V + E) - V: 노드 수, E: 간선 수
 * - 공간 복잡도: O(h) - h: 트리의 높이
 */
