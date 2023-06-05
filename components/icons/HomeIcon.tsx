import * as React from 'react';

const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none" {...props}>
    <path
      stroke="#8B909A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="m17.417 7.984-4.889-3.802a2.444 2.444 0 0 0-3.001 0l-4.89 3.802a2.443 2.443 0 0 0-.943 1.93v6.6c0 1.012.821 1.833 1.834 1.833h11c1.012 0 1.833-.82 1.833-1.833v-6.6c0-.755-.349-1.467-.944-1.93"
    />
    <path
      stroke="#8B909A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M14.667 13.75c-2.026 1.222-5.31 1.222-7.334 0"
    />
  </svg>
);
export default HomeIcon;
