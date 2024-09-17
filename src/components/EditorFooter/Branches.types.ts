export type BranchesData = {
  currentBranch: string;
  localBranches: string[];
  remoteBranches: string[];
};

export type BranchesResponse = {
  status: string;
  message: string;
  data: BranchesData;
};
