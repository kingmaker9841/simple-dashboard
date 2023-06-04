import * as React from 'react';

const IndentDecrease: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      stroke="#8B909A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M20 6h-7M20 12h-9M20 18h-7M8 8l-4 4 4 4"
    />
  </svg>
);
export default IndentDecrease;
