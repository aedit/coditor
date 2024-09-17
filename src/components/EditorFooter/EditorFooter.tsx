import { useContext, useState } from 'react';
import { FaCodeBranch } from 'react-icons/fa';

import BranchPopup from './BranchPopup';
import { Context } from '../../contexts/App.context';

const EditorFooter = () => {
  const { branchChanged, branches, currentBranch, isBranchesLoading } =
    useContext(Context);

  const [showBranchPopup, setShowBranchPopup] = useState(false);

  const selectBranch = (branch: string) => {
    setShowBranchPopup(false);
    if (branch === currentBranch) return;
    branchChanged(branch);
  };

  return (
    <div className="text-xs">
      {isBranchesLoading ? (
        'Loading branches data...'
      ) : (
        <span
          className="flex items-center gap-1 cursor-pointer select-none"
          onClick={() => setShowBranchPopup((show: boolean) => !show)}
        >
          <FaCodeBranch />
          {currentBranch ?? 'default'}
        </span>
      )}
      {showBranchPopup && branches && (
        <BranchPopup
          className="absolute bottom-6"
          currentBranch={currentBranch}
          localBranches={branches.localBranches}
          remoteBranches={branches.remoteBranches}
          selectBranch={selectBranch}
        />
      )}
    </div>
  );
};

export default EditorFooter;
