import React from 'react';

const Search: React.FunctionComponent = ({ children, ...props }) => {
  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search ..."
        className="w-full rounded-[6px] bg-white px-4 py-[10px] pr-[40px] font-normal leading-[21px] text-slateLavender outline-none"
        {...props}
      />
      {children}
    </div>
  );
};

export default Search;
