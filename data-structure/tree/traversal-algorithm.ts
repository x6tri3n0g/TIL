interface FileDirectoryType {
  name: string;
  type: "directory" | "file";
  children?: FileDirectoryType[];
}

const FILE_DIRECTORY: FileDirectoryType = {
  name: "src",
  type: "directory",
  children: [
    {
      name: "index.js",
      type: "file",
    },
    {
      name: "utils.js",
      type: "file",
    },
    {
      name: "components",
      type: "directory",
      children: [
        {
          name: "components.js",
          type: "file",
        },
      ],
    },
    {
      name: "pages",
      type: "directory",
      children: [
        {
          name: "pages.js",
          type: "file",
        },
      ],
    },
    {
      name: "styles",
      type: "directory",
      children: [
        {
          name: "styles.css",
          type: "file",
        },
      ],
    },
  ],
};

/**
 * @description BFS 방식으로 파일 경로를 수집하는 함수
 * 레벨 순서대로 파일 경로를 수집
 */
function collectAllFilesBFS(root: FileDirectoryType): string[] {
  const files: string[] = [];
  const queue: Array<[FileDirectoryType, string]> = [[root, ""]];

  while (queue.length > 0) {
    const [current, parentPath] = queue.shift()!;
    const currentPath = parentPath
      ? `${parentPath}/${current.name}`
      : current.name;

    if (current.type === "file") {
      // 파일이면 경로를 저장
      files.push(currentPath);
    } else {
      // 디렉토리면 자식들을 큐에 추가
      for (const child of current.children || []) {
        queue.push([child, currentPath]);
      }
    }
  }

  return files;
}

console.log("=== 파일 경로 수집 ===");
const filesFromBFS = collectAllFilesBFS(FILE_DIRECTORY);
filesFromBFS.forEach((file, index) => {
  console.log(`${index + 1}. ${file}`);
});

console.log(`\n -> 총 ${filesFromBFS.length}개 파일 발견`);
