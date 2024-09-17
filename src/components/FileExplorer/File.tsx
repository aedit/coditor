import { useContext } from 'react';
import { FaFile } from 'react-icons/fa';
import { Context } from '../../contexts/App.context';
import { FileStructure } from '../../contexts/Files/Files.types';

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
        className={`flex items-center p-0.5 gap-1 cursor-pointer ${relativePath === activeWorksheet?.relativePath ? '!bg-gray-600 text-white' : ''}`}
        onClick={() => openFile(file)}
        title={relativePath}
      >
        <span className="pr-3"></span>
        <FaFile className="text-sm" />
        <span>{name}</span>
      </div>
    </div>
  );
};

export default File;
