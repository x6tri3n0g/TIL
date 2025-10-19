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
function searchFileDFS(directory) {
    for (var _i = 0, _a = directory.children || []; _i < _a.length; _i++) {
        var child = _a[_i];
        if (child.type === "file") {
            console.log(child.name);
        }
        else {
            searchFileDFS(child);
        }
    }
}
searchFileDFS(FILE_DIRECTORY_DFS);
