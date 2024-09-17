import { useState } from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { CiFolderOn } from 'react-icons/ci';
import { FileStructure } from '../../contexts/Files/Files.types';
import { IoChevronDownOutline } from 'react-icons/io5';
import File from './File';

const Directory = ({
  name,
  content,
  relativePath,
  className = '',
}: {
  name: string;
  content: FileStructure[];
  relativePath: string;
  className?: string;
}) => {
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);

  return (
    <div className={'text-xs ' + className}>
      <div
        className="flex items-center p-0.5 gap-0.5 cursor-pointer"
        onClick={() => setIsDirectoryOpen((isOpen) => !isOpen)}
        title={relativePath}
      >
        {isDirectoryOpen ? (
          <IoChevronForward className="text-sm" />
        ) : (
          <IoChevronDownOutline className="text-sm" />
        )}
        <CiFolderOn className="text-sm" />
        <span className="pl-1">{name}</span>
      </div>
      {isDirectoryOpen && (
        <div className="flex flex-col gap-0.5">
          {content?.map((el, idx) => {
            if (el.pathType === 'directory') {
              return (
                <Directory
                  key={idx}
                  className="pl-2"
                  name={el.name}
                  content={el.content!}
                  relativePath={el.relativePath}
                ></Directory>
              );
            }
            return (
              <File
                key={idx}
                className="pl-2"
                name={el.name}
                relativePath={el.relativePath}
              ></File>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Directory;
