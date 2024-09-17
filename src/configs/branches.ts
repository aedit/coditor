import { BranchesResponse } from '../components/EditorFooter/Branches.types';

const mockBranchesData = {
  status: 'SUCCESS',
  message: 'Git branches fetched successfully',
  data: {
    currentBranch: 'dev',
    localBranches: ['dev', 'main', 'testing'],
    remoteBranches: ['origin/dev', 'origin/main', 'origin/testing'],
  },
};

export default function () {
  return new Promise<BranchesResponse>((resolve) => {
    setTimeout(() => {
      resolve(mockBranchesData);
    }, 500);
  });
}
