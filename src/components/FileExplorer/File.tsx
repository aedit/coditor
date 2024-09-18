import { useContext } from 'react';
import { Context } from '../../contexts/App.context';
import { FileStructure } from '../../contexts/Files/Files.types';
import FileIcon from '../FileIcon';
import { gitStatusMap } from './variables';

const File = ({
  name,
  relativePath,
  className = '',
  file,
}: {
  name: string;
  relativePath: string;
  className?: string;
  file: FileStructure;
}) => {
  const { openFile, activeWorksheet } = useContext(Context);

  return (
    <div className={'text-xs pl-1 ' + className}>
      <div
        className={`flex items-center p-0.5 gap-1 cursor-pointer w-full ${gitStatusMap[file.gitStatus || 'default'].className} ${relativePath === activeWorksheet?.relativePath ? '!bg-gray-400/75 dark:!bg-gray-600/75' : ''}`}
        onClick={() => openFile(file)}
        title={relativePath}
      >
        <span className="pr-3"></span>
        <FileIcon fileName={name} className="text-sm min-w-4" />
        <span className="inline-block truncate">{name}</span>
        {file.gitStatus && (
          <span className="ml-auto pr-2">
            {gitStatusMap[file.gitStatus].textContent}
          </span>
        )}
      </div>
    </div>
  );
};

export default File;
