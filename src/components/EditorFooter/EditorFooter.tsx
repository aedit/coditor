import { useEffect, useState } from 'react';
import { FaCodeBranch } from 'react-icons/fa';

import mockBranchesResponse from '../../configs/branches';
import BranchPopup from './BranchPopup';
import { BranchesData } from './Branches.types';

const EditorFooter = () => {
  const [branches, setBranches] = useState<BranchesData>();
  const [currentBranch, setCurrentBranch] = useState<string | null>(null);
  const [isBranchesLoading, setIsBranchesLoading] = useState(true);
  const [showBranchPopup, setShowBranchPopup] = useState(false);

  useEffect(() => {
    setIsBranchesLoading(true);
    mockBranchesResponse()
      .then((response) => {
        if (response.status === 'SUCCESS') {
          setBranches(response.data);
          setCurrentBranch(response.data.currentBranch);
          setIsBranchesLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setIsBranchesLoading(false);
      });
  }, []);

  const selectBranch = (branch: string) => {
    setShowBranchPopup(false);
    if (branch === currentBranch) return;
    setCurrentBranch(branch);
    // TODO: Update current branch with selected branch
    console.log(`Selected branch: ${branch}`);
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
