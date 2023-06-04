import * as React from 'react';

const BellIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={27} height={26} fill="none" {...props}>
    <path
      stroke="#4B465C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.274 5.417a2.167 2.167 0 1 1 4.334 0 7.583 7.583 0 0 1 4.333 6.5v3.25a4.334 4.334 0 0 0 2.167 3.25H4.774a4.334 4.334 0 0 0 2.167-3.25v-3.25a7.583 7.583 0 0 1 4.333-6.5"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.2}
      strokeWidth={2}
      d="M11.274 5.417a2.167 2.167 0 1 1 4.334 0 7.583 7.583 0 0 1 4.333 6.5v3.25a4.334 4.334 0 0 0 2.167 3.25H4.774a4.334 4.334 0 0 0 2.167-3.25v-3.25a7.583 7.583 0 0 1 4.333-6.5"
    />
    <path
      stroke="#4B465C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.19 18.417V19.5a3.25 3.25 0 0 0 6.5 0v-1.083"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.2}
      strokeWidth={2}
      d="M10.19 18.417V19.5a3.25 3.25 0 0 0 6.5 0v-1.083"
    />
  </svg>
);
export default BellIcon;
