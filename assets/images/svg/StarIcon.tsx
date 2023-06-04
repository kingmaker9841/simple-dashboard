import * as React from 'react';

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none" {...props}>
    <path
      stroke="#8B909A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="m11 16.27-5.658 2.975 1.081-6.3L1.84 8.484l6.325-.917 2.829-5.732 2.829 5.732 6.325.917-4.584 4.461 1.08 6.3L11 16.271Z"
      clipRule="evenodd"
    />
    <path
      stroke="#8B909A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="m11 16.27-5.658 2.975 1.081-6.3L1.84 8.484l6.325-.917 2.829-5.732 2.829 5.732 6.325.917-4.584 4.461 1.08 6.3L11 16.271Z"
      clipRule="evenodd"
    />
  </svg>
);
export default StarIcon;
