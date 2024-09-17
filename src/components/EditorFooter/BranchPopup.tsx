type BranchPopupProps = {
  className?: string;
  currentBranch: string | null;
  localBranches: string[];
  remoteBranches: string[];
  selectBranch: (branch: string) => void;
};

const BranchPopup = ({
  className,
  currentBranch,
  localBranches,
  remoteBranches,
  selectBranch,
}: BranchPopupProps) => {
  const branchClicked = (branch: string) => {
    selectBranch(branch);
  };

  return (
    <div
      className={
        className +
        ' branch-popup p-1 shadow-lg border rounded-sm dark:shadow-gray-500 dark:shadow-md'
      }
    >
      <div className="my-2">
        <div className="font-semibold pb-0.5">Local Branches</div>
        <ul>
          {localBranches.map((branch, idx) => (
            <li
              className={`cursor-pointer hover:font-semibold ${branch === currentBranch ? 'text-green-500' : ''}`}
              onClick={() => branchClicked(branch)}
              key={idx}
            >
              {branch}
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="my-2">
        <div className="font-semibold pb-0.5">Remote Branches</div>
        <ul>
          {remoteBranches.map((branch, idx) => (
            <li
              className={`cursor-pointer hover:font-semibold ${branch === currentBranch ? 'text-green-500' : ''}`}
              onClick={() => branchClicked(branch)}
              key={idx}
            >
              {branch}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BranchPopup;
