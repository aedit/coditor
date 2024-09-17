export type FileData = {
  relativePath: string;
  name: string;
  pathType: string;
  depth?: number;
  index?: number;
  gitStatus: string | null;
  gitIgnored: boolean;
};

export type FilesResponse = {
  status: string;
  message: string;
  data: {
    files: FileData[];
  };
};

export type WorksheetData = {
  relativePath: string;
  name: string;
  pathType: string;
  depth: number;
  index: number;
  gitStatus: string | null;
  editorContent: string;
  modifiedContent: string;
  gitIgnored: boolean;
  worksheetType: string;
  repositoryId: string;
  branch: string;
  role: string;
  warehouse: string;
  content: string;
};

export type WorksheetResponse = {
  activeWorksheets: WorksheetData[];
};
