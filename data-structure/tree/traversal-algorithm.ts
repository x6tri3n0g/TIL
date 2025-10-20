import { FileDirectoryType, FILE_DIRECTORY } from "../data/file-directory-data";

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

// === 파일 경로 수집 (BFS 방식) ===
// 1. src/index.js
// 2. src/utils/format.js
// 3. src/utils/date.js
// 4. src/components/components.js
// 5. src/pages/pages.js
// 6. src/styles/styles.css
// 7. src/components/shared/button.js
// 8. src/components/shared/input.js

//  -> 총 8개 파일 발견

/**
 * @description 실행 방법
 * --lib es2015,dom 옵션 추가, 이유: Set 객체를 사용하기 위해
 * > tsc --lib es2015,dom ./data-structure/tree/traversal-algorithm.ts
 * > node ./data-structure/tree/traversal-algorithm.js
 */
