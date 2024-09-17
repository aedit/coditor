import { FileStructure } from '../../contexts/Files/Files.types';

type WorksheetsTabProps = {
  worksheets: FileStructure[];
  currentWorksheet: FileStructure;
  onChange: (worksheet: FileStructure) => void;
};

const WorksheetsTab = ({
  worksheets,
  currentWorksheet,
  onChange,
}: WorksheetsTabProps) => {
  return (
    <div>
      <div className="h-max flex gap-2 text-sm">
        {worksheets.map((worksheet: FileStructure, idx) => (
          <button
            key={idx}
            onClick={() => onChange(worksheet)}
            title={worksheet?.relativePath}
          >
            {worksheet?.name}
          </button>
        ))}
      </div>
      <div className="h-max flex gap-2 text-xs">
        <div>{currentWorksheet?.relativePath}</div>
      </div>
    </div>
  );
};

export default WorksheetsTab;
