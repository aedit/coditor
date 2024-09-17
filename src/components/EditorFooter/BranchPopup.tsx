type BranchPopupProps = {
  className?: string;
  currentBranch: string | null;
  localBranches: string[];
  remoteBranches: string[];
  selectBranch: (branch: string) => void;
};

const ListItem = ({
  branch,
  currentBranch,
  onClick,
}: {
  branch: string;
  currentBranch: string | null;
  onClick: (branch: string) => void;
}) => {
  return (
    <li
      className={`cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-800 px-2 py-1 rounded-md ${branch === currentBranch ? 'text-white !bg-gray-600' : ''}`}
      onClick={() => onClick(branch)}
    >
      {branch}
    </li>
  );
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
        ' z-[101] bg-gray-100 dark:bg-gray-950 branch-popup p-1 px-3 shadow-lg border rounded-sm dark:shadow-md'
      }
    >
      <div className="my-2">
        <div className="font-semibold pb-0.5">Local Branches</div>
        <ul>
          {localBranches.map((branch, idx) => (
            <ListItem
              key={idx}
              branch={branch}
              currentBranch={currentBranch}
              onClick={branchClicked}
            />
          ))}
        </ul>
      </div>
      <hr />
      <div className="my-2">
        <div className="font-semibold pb-0.5">Remote Branches</div>
        <ul>
          {remoteBranches.map((branch, idx) => (
            <ListItem
              key={idx}
              branch={branch}
              currentBranch={currentBranch}
              onClick={branchClicked}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BranchPopup;
