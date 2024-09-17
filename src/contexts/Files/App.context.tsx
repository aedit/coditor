import { createContext, useState } from 'react';

import mockFilesResponse from '../../configs/list-files';
import mockWorksheetsResponse from '../../configs/open-worksheets';
import mockBranchesResponse from '../../configs/branches';

import { FileStructure, WorksheetData } from './Files.types';
import useMockQuery from '../../hooks/useMockQuery';
import { BranchesData } from '../../components/EditorFooter/Branches.types';

type AppContextType = {
  isLoading: boolean;
  isBranchesLoading: boolean;
  branches: BranchesData | null;
  files: FileStructure[];
  worksheets: WorksheetData[];
  currentBranch: string;
  branchChanged: (branch: string) => void;
};

export const Context = createContext({
  isLoading: true,
  isBranchesLoading: true,
  files: [],
  branches: null,
  worksheets: [],
  currentBranch: 'default',
  branchChanged: () => {},
} as AppContextType);

export const ContextProvider = ({ children }: { children: JSX.Element }) => {
  const [currentBranch, setCurrentBranch] = useState('default');

  const [isFilesDataLoading, files, filesRefresh] =
    useMockQuery<FileStructure[]>(mockFilesResponse);

  const [isWorksheetLoading, worksheets, worksheetsRefresh] = useMockQuery<
    WorksheetData[]
  >(mockWorksheetsResponse);

  const [isBranchesLoading, branches] = useMockQuery<BranchesData>(() =>
    mockBranchesResponse().then((response) => {
      setCurrentBranch(response.data.currentBranch);
      return response;
    })
  );

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
        currentBranch,
        branchChanged,
      }}
    >
      {children}
    </Context.Provider>
  );
};
