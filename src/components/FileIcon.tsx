import { LuFileJson2 } from 'react-icons/lu';
import { IoLogoPython } from 'react-icons/io';
import { GrDocumentTxt } from 'react-icons/gr';
import { FaCodeBranch, FaFile } from 'react-icons/fa';
import { TbLogs } from 'react-icons/tb';
import { BsFiletypeYml } from 'react-icons/bs';
import { FaInfoCircle } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa6';
import { IconType } from 'react-icons';

type IconMapType = {
  [key: string]: { component: IconType; classes: string };
};

const iconMap: IconMapType = {
  json: { component: LuFileJson2, classes: 'tex-sm text-green-600' },
  py: { component: IoLogoPython, classes: 'tex-sm text-blue-300' },
  txt: { component: GrDocumentTxt, classes: 'tex-sm text-cyan-400' },
  gitkeep: { component: FaCodeBranch, classes: 'tex-sm text-red-300' },
  gitignore: { component: FaCodeBranch, classes: 'tex-sm text-red-300' },
  log: { component: TbLogs, classes: 'tex-sm text-red-400' },
  yml: { component: BsFiletypeYml, classes: 'tex-sm text-green-400' },
  md: { component: FaInfoCircle, classes: 'tex-sm text-blue-600' },
  DS_Store: { component: FaDatabase, classes: 'tex-sm text-yellow-500' },
  sql: { component: FaDatabase, classes: 'tex-sm text-orange-500' },
};

const FileIcon = ({
  fileName,
  className,
}: {
  fileName: string;
  className: string;
}) => {
  const fileType = fileName.split('.').pop();

  const iconConfig = iconMap[fileType!];

  if (!iconConfig) {
    return <FaFile className={className} />;
  }

  const { component: IconComponent, classes } = iconMap[fileType!];

  return <IconComponent className={className + ' ' + classes} />;
};

export default FileIcon;
