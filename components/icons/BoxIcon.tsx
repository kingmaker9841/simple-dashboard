import * as React from 'react';

const BoxIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none" {...props}>
    <path
      stroke="#8B909A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="m11 2.75 7.333 4.125v8.25L11 19.25l-7.333-4.125v-8.25L11 2.75"
    />
    <path
      stroke="#8B909A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="m11 2.75 7.333 4.125v8.25L11 19.25l-7.333-4.125v-8.25L11 2.75M11 11l7.333-4.125M11 11l7.333-4.125M11 11v8.25M11 11v8.25M11 11 3.667 6.875M11 11 3.667 6.875"
    />
  </svg>
);
export default BoxIcon;
