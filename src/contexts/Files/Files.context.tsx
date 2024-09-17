import { createContext, useEffect, useState } from 'react';

import mockFilesResponse from '../../configs/list-files';
import mockWorksheetsResponse from '../../configs/open-worksheets';

import { FileData, WorksheetData } from './Files.types';
import structureFiles from '../../utilities/structureFiles';

type FilesContextType = {
  isLoading: boolean;
  files: FileData[];
  worksheets: WorksheetData[];
};

export const FilesContext = createContext({
  isLoading: true,
  files: [],
  worksheets: [],
} as FilesContextType);

export const FilesProvider = ({ children }: { children: JSX.Element }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [files, setFiles] = useState<FileData[]>([]);
  const [worksheets, setWorksheets] = useState<WorksheetData[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const fetchData = () => {
    Promise.all([mockFilesResponse(), mockWorksheetsResponse()])
      .then((responses) => {
        if (responses[0].status === 'SUCCESS') {
          console.log(structureFiles(responses[0].data.files!));
        }
        if (responses[1].activeWorksheets) {
          setWorksheets(responses[1].activeWorksheets);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <FilesContext.Provider value={{ isLoading, files, worksheets }}>
      {children}
    </FilesContext.Provider>
  );
};
