import { FileData, FileStructure } from '../contexts/Files/Files.types';

export default function (files: FileData[]) {
  const fileStructure: FileStructure[] = [];

  // Loop through all the files
  for (let i = 0; i < files.length; ++i) {
    const { relativePath, name, pathType, gitIgnored, gitStatus } = files[i];

    // Split the relative path into an array of directory names and file names
    const filePath = relativePath.split('/');

    let obj: FileStructure | FileStructure[] = fileStructure;

    // Create the nested objects for each directory in the file path

    for (let j = 0; j < filePath.length - 1; ++j) {
      const pathKey = filePath[j];
      const newObj = (obj as FileStructure[]).find((el) => el.name === pathKey);

      // Failsafe if the directory in the file path doesn't exist
      if (!newObj) {
        (obj as FileStructure[]).unshift({
          name: pathKey,
          relativePath: filePath.slice(0, j + 1).join('/'),
          pathType: 'directory',
          content: [],
          gitIgnored: false,
          gitStatus: null,
        });
      }

      //Extract contents from the directory structure
      obj = (obj as FileStructure[]).find(
        (el) => el.name === pathKey
      )!.content!;
    }

    // Add the current file or directory to the last directory in the file path
    (obj as FileStructure[]).push({
      name,
      pathType,
      relativePath,
      gitIgnored,
      gitStatus,
      ...(pathType === 'directory' && { content: [] }),
    });
  }

  return fileStructure;
}
