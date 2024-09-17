import { IoChevronForward } from 'react-icons/io5';
import { FileStructure } from '../../contexts/Files/Files.types';
import { MdOutlineClose } from 'react-icons/md';

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
  const closeWorksheet = (evt: React.MouseEvent<SVGElement>) => {
    evt.stopPropagation();
    console.log('clicked');
  };
  return (
    <div>
      <div className="h-max flex text-sm overflow-x-auto hide-scrollbar">
        {worksheets.map((worksheet: FileStructure, idx) => (
          <button
            key={idx}
            onClick={() => onChange(worksheet)}
            title={worksheet?.relativePath}
            className={`border border-t-0 border-l-0 border-gray-500 pl-2 pr-1 py-0.5 flex items-center ${worksheet.relativePath === currentWorksheet?.relativePath ? 'text-white bg-gray-600' : ''}`}
          >
            <span>{worksheet?.name}</span>
            <MdOutlineClose
              onClick={closeWorksheet}
              className="text-md ml-2 hover:bg-gray-300 rounded-md"
            />
          </button>
        ))}
      </div>
      <div className="h-max flex gap-2 text-xs">
        <PathViewer relativePath={currentWorksheet?.relativePath} />
      </div>
    </div>
  );
};

export default WorksheetsTab;
