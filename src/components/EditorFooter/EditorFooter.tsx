import { useContext, useEffect, useRef, useState } from 'react';
import { FaCodeBranch } from 'react-icons/fa';

import BranchPopup from './BranchPopup';
import { Context } from '../../contexts/App.context';

const EditorFooter = () => {
  const { branchChanged, branches, currentBranch, isBranchesLoading } =
    useContext(Context);

  const [showBranchPopup, setShowBranchPopup] = useState(false);

  const branchRef = useRef<HTMLDivElement>(null);

  const selectBranch = (branch: string) => {
    setShowBranchPopup(false);
    if (branch === currentBranch) return;
    branchChanged(branch);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside, false);

    return () => {
      window.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event: Event) => {
    if (
      branchRef.current &&
      !branchRef.current.contains(event.target as Node)
    ) {
      setShowBranchPopup(false);
    }
  };

  return (
    <div className="text-xs" ref={branchRef}>
      {isBranchesLoading ? (
        'Loading branches data...'
      ) : (
        <span
          className="flex items-center gap-1 cursor-pointer select-none"
          onClick={() => setShowBranchPopup(true)}
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
