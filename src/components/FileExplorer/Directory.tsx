import { useState } from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { CiFolderOn } from 'react-icons/ci';
import { FileStructure } from '../../contexts/Files/Files.types';
import { IoChevronDownOutline } from 'react-icons/io5';
import File from './File';
import { gitStatusMap } from './variables';

const Directory = ({
  name,
  subDirectories,
  relativePath,
  className = '',
  gitStatus = 'default',
}: {
  name: string;
  subDirectories: FileStructure[];
  relativePath: string;
  className?: string;
  gitStatus?: string;
}) => {
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);

  return (
    <div className={'text-xs ' + className}>
      <div
        className={`flex items-center p-0.5 gap-0.5 cursor-pointer pr-2 ${gitStatusMap[gitStatus].className}`}
        onClick={() => setIsDirectoryOpen((isOpen) => !isOpen)}
        title={relativePath}
      >
        {isDirectoryOpen ? (
          <IoChevronDownOutline className="text-sm min-w-4" />
        ) : (
          <IoChevronForward className="text-sm min-w-4" />
        )}
        <CiFolderOn className="text-sm min-w-4" />
        <span className="inline-block truncate pl-1">{name}</span>
        <span
          className={`ml-auto h-2 w-2 rounded-full opacity-80 ${gitStatusMap[gitStatus].background}`}
        ></span>
      </div>
      {isDirectoryOpen && (
        <div className="flex flex-col gap-0.5">
          {subDirectories?.map((el, idx) => {
            if (el.pathType === 'directory') {
              return (
                <Directory
                  key={idx}
                  className="pl-2"
                  name={el.name}
                  subDirectories={el.subDirectories!}
                  relativePath={el.relativePath}
                  gitStatus={el.gitStatus || 'default'}
                ></Directory>
              );
            }
            return (
              <File
                key={idx}
                className="pl-2"
                name={el.name}
                relativePath={el.relativePath}
                file={el}
              ></File>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Directory;
