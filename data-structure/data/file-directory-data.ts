export interface FileDirectoryType {
  name: string;
  type: "directory" | "file";
  children?: FileDirectoryType[];
}

export const FILE_DIRECTORY: FileDirectoryType = {
  name: "src",
  type: "directory",
  children: [
    {
      name: "index.js",
      type: "file",
    },
    {
      name: "utils",
      type: "directory",
      children: [
        {
          name: "format.js",
          type: "file",
        },
        {
          name: "date.js",
          type: "file",
        },
      ],
    },
    {
      name: "components",
      type: "directory",
      children: [
        {
          name: "components.js",
          type: "file",
        },
        {
          name: "shared",
          type: "directory",
          children: [
            {
              name: "button.js",
              type: "file",
            },
            {
              name: "input.js",
              type: "file",
            },
          ],
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
