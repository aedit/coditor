import { useContext } from 'react';
import { FilesContext } from '../../contexts/Files/Files.context';

const FileExplorerWindow = () => {
  const { files } = useContext(FilesContext);

  console.log(files);

  return <div>File Explorer</div>;
};

export default FileExplorerWindow;
