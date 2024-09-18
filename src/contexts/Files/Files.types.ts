export type FileData = {
  relativePath: string;
  name: string;
  pathType: string;
  depth?: number;
  index?: number;
  gitStatus: string | null;
  gitIgnored: boolean;
  content?: string;
};

export type FilesResponse = {
  status: string;
  message: string;
  data: {
    files: FileData[];
  };
};

export type WorksheetResponse = {
  activeWorksheets: FileStructure[];
};

export type FileStructure = {
  name: string;
  relativePath: string;
  pathType: string;
  subDirectories?: FileStructure[];
  gitIgnored: boolean;
  gitStatus: string | null;
  [key: string]: unknown;
};
