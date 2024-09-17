import { createContext, useEffect, useState } from 'react';

import mockFilesResponse from '../configs/list-files';
import mockWorksheetsResponse from '../configs/open-worksheets';
import mockBranchesResponse from '../configs/branches';

import { FileStructure } from './Files/Files.types';
import useMockQuery from '../hooks/useMockQuery';
import { BranchesData } from '../components/EditorFooter/Branches.types';

type AppContextType = {
  isLoading: boolean;
  isBranchesLoading: boolean;
  branches: BranchesData | null;
  files: FileStructure[];
  worksheets: FileStructure[];
  activeWorksheet: FileStructure;
  openFile: (file: FileStructure) => void;
  currentBranch: string;
  branchChanged: (branch: string) => void;
};

export const Context = createContext({
  isLoading: true,
  isBranchesLoading: true,
  files: [],
  branches: null,
  worksheets: [],
  activeWorksheet: {} as FileStructure,
  openFile: () => {},
  currentBranch: 'default',
  branchChanged: () => {},
} as AppContextType);

export const ContextProvider = ({ children }: { children: JSX.Element }) => {
  const [currentBranch, setCurrentBranch] = useState('default');

  const [isFilesDataLoading, files, filesRefresh] =
    useMockQuery<FileStructure[]>(mockFilesResponse);

  const [isWorksheetLoading, worksheets, worksheetsRefresh, setWorksheets] =
    useMockQuery<FileStructure[]>(() => mockWorksheetsResponse(true));

  const [isBranchesLoading, branches] = useMockQuery<BranchesData>(() =>
    mockBranchesResponse().then((response) => {
      setCurrentBranch(response.data.currentBranch);
      return response;
    })
  );

  const [activeWorksheet, setActiveWorksheet] = useState(worksheets?.[0]);

  useEffect(() => {
    if (!worksheets) return;
    localStorage.setItem('worksheets', JSON.stringify(worksheets));
  }, [worksheets]);

  const openFile = (file: FileStructure) => {
    const worksheet = worksheets.find(
      (worksheet) => worksheet.relativePath === file.relativePath
    );
    if (!worksheet) {
      setWorksheets([...worksheets, file]);
    }

    setActiveWorksheet(worksheet || (file as FileStructure));
  };

  const branchChanged = (branch: string) => {
    setCurrentBranch(branch);
    filesRefresh();
    worksheetsRefresh();
  };

  return (
    <Context.Provider
      value={{
        isLoading: isFilesDataLoading || isWorksheetLoading,
        isBranchesLoading: isBranchesLoading,
        branches,
        files,
        worksheets,
        activeWorksheet,
        openFile,
        currentBranch,
        branchChanged,
      }}
    >
      {children}
    </Context.Provider>
  );
};
