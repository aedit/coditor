import { FaFile } from 'react-icons/fa';

const File = ({
  name,
  relativePath,
  className = '',
}: {
  name: string;
  relativePath: string;
  className?: string;
}) => {
  const fileClicked = () => {
    console.log(name);
  };
  return (
    <div className={'text-xs pl-1 ' + className}>
      <div
        className="flex items-center p-0.5 gap-1 cursor-pointer"
        onClick={() => fileClicked()}
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
