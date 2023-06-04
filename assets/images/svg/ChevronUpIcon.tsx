import * as React from 'react';

const ChevronUp: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" {...props}>
    <path stroke="#28C76F" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="m5 13 5-5 5 5" />
  </svg>
);
export default ChevronUp;
