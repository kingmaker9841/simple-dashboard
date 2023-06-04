import * as React from 'react';

const CirclePlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none" {...props}>
    <circle cx={11} cy={11} r={8.25} stroke="#8B909A" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} />
    <circle cx={11} cy={11} r={8.25} stroke="#8B909A" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} />
    <path
      stroke="#8B909A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M8.25 11h5.5M8.25 11h5.5M11 8.25v5.5M11 8.25v5.5"
    />
  </svg>
);
export default CirclePlusIcon;
