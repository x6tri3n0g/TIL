interface FileDirectoryType {
  name: string;
  type: "directory" | "file";
  children?: FileDirectoryType[];
}

const FILE_DIRECTORY_DFS: FileDirectoryType = {
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

function searchFileDFS(directory: FileDirectoryType) {
  for (const child of directory.children || []) {
    if (child.type === "file") {
      console.log(child.name);
    } else {
      searchFileDFS(child);
    }
  }
}

searchFileDFS(FILE_DIRECTORY_DFS);
