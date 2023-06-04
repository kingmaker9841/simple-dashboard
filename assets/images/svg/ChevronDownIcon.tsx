import * as React from 'react';

const ChevronDown: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" {...props}>
    <path stroke="#EA5455" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="m5 8 5 5 5-5" />
  </svg>
);
export default ChevronDown;
