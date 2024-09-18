import { IoChevronForward } from 'react-icons/io5';
import { FileStructure } from '../../contexts/Files/Files.types';
import { MdOutlineClose } from 'react-icons/md';
import { IoIosAddCircle } from 'react-icons/io';
import { useContext } from 'react';
import { Context } from '../../contexts/App.context';
import FileIcon from '../FileIcon';

type WorksheetsTabProps = {
  worksheets: FileStructure[];
  currentWorksheet: FileStructure;
  onChange: (worksheet: FileStructure) => void;
};

const PathViewer = ({ relativePath }: { relativePath: string }) => {
  if (!relativePath)
    return <div className="flex items-center py-1 px-2">/</div>;
  const path = relativePath.split('/');
  return (
    <div className="flex items-center py-1 px-2">
      {path.map((entry, idx, arr) => (
        <span key={idx} className="flex items-center">
          <span>{entry}</span>
          {idx < arr.length - 1 && <IoChevronForward className="text-xs" />}
        </span>
      ))}
    </div>
  );
};

const WorksheetsTab = ({
  worksheets,
  currentWorksheet,
  onChange,
}: WorksheetsTabProps) => {
  const { closeWorksheet, addNewWorksheet } = useContext(Context);

  const handleClose = (
    evt: React.MouseEvent<SVGElement>,
    worksheet: FileStructure
  ) => {
    evt.stopPropagation();
    closeWorksheet(worksheet);
  };
  return (
    <div className="relative">
      <div className="h-max flex text-sm overflow-x-auto hide-scrollbar pr-10">
        {worksheets.map((worksheet: FileStructure, idx) => (
          <button
            key={idx}
            onClick={() => onChange(worksheet)}
            title={worksheet?.relativePath}
            className={`group border border-t-0 border-l-0 border-gray-500 pl-2 pr-1 py-0.5 flex items-center ${worksheet.relativePath === currentWorksheet?.relativePath ? 'text-white bg-gray-600' : ''}`}
          >
            <FileIcon fileName={worksheet.name} className="text-md mr-1" />
            <span>{worksheet?.name}</span>
            <MdOutlineClose
              onClick={(e) => handleClose(e, worksheet)}
              className="invisible group-hover:visible text-md ml-2 hover:bg-gray-300 hover:text-black rounded-md"
            />
          </button>
        ))}
      </div>
      <div className="h-max flex gap-2 text-xs">
        <PathViewer relativePath={currentWorksheet?.relativePath} />
      </div>
      <span
        className="flex items-center absolute right-0 top-0 cursor-pointer p-0.5 px-2 bg-gray-100 dark:bg-gray-700"
        title="Add new worksheet"
        onClick={addNewWorksheet}
      >
        <IoIosAddCircle className="text-xl text-gray-400 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" />
      </span>
    </div>
  );
};

export default WorksheetsTab;
