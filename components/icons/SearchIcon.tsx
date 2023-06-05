import * as React from 'react';

const Search: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#8B909A"
        fillRule="evenodd"
        d="M7.875 1.5a6.375 6.375 0 1 0 3.946 11.382l2.74 2.739a.75.75 0 0 0 1.06-1.06l-2.74-2.74A6.375 6.375 0 0 0 7.876 1.5ZM3 7.875a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Search;
