import * as React from 'react';

const ChevronRight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path stroke="#8B909A" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="m6 4 4 4-4 4" />
  </svg>
);
export default ChevronRight;
