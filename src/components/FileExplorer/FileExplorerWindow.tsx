import { useContext } from 'react';
import { Context } from '../../contexts/App.context';
import { IoChevronDownOutline } from 'react-icons/io5';

import Directory from './Directory';
import File from './File';

const FileExplorerWindow = () => {
  const { files } = useContext(Context);

  const { name, subDirectories } = files[0];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="font-semibold text-sm flex items-center p-1 gap-1 border-b border-black dark:border-gray-400">
        <IoChevronDownOutline className="text-md" />
        {name}
      </div>
      <div className="flex flex-col gap-0.5">
        {subDirectories?.map((el, idx) => {
          if (el.pathType === 'directory') {
            return (
              <Directory
                key={idx}
                className="pl-1"
                name={el.name}
                subDirectories={el.subDirectories!}
                relativePath={el.relativePath}
              ></Directory>
            );
          }
          return (
            <File
              key={idx}
              className="pl-1"
              name={el.name}
              relativePath={el.relativePath}
              file={el}
            ></File>
          );
        })}
      </div>
    </div>
  );
};

export default FileExplorerWindow;
