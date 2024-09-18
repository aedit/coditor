export const gitStatusMap: Record<string, Record<string, string>> = {
  untracked: {
    textContent: 'U',
    className: 'text-green-500',
    background: 'bg-green-500',
  },
  modified: {
    textContent: 'M',
    className: 'text-yellow-500',
    background: 'bg-yellow-500',
  },
  default: { textContent: '', className: '', background: '' },
};
