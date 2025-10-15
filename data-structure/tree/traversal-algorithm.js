var FILE_DIRECTORY = {
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
 * @description BFS 방식으로 파일 경로를 수집하는 함수
 * 레벨 순서대로 파일 경로를 수집
 */
function collectAllFilesBFS(root) {
    var files = [];
    var queue = [[root, ""]];
    while (queue.length > 0) {
        var _a = queue.shift(), current = _a[0], parentPath = _a[1];
        var currentPath = parentPath
            ? parentPath + "/" + current.name
            : current.name;
        if (current.type === "file") {
            // 파일이면 경로를 저장
            files.push(currentPath);
        }
        else {
            // 디렉토리면 자식들을 큐에 추가
            for (var _i = 0, _b = current.children || []; _i < _b.length; _i++) {
                var child = _b[_i];
                queue.push([child, currentPath]);
            }
        }
    }
    return files;
}
console.log("=== 파일 경로 수집 ===");
var filesFromBFS = collectAllFilesBFS(FILE_DIRECTORY);
filesFromBFS.forEach(function (file, index) {
    console.log(index + 1 + ". " + file);
});
console.log("\n -> \uCD1D " + filesFromBFS.length + "\uAC1C \uD30C\uC77C \uBC1C\uACAC");
