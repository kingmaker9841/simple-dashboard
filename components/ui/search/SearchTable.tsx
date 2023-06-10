import Search from '@components/ui/search/Search';
import React from 'react';
import { SearchIcon } from '@components/icons';

const SearchTable: React.FunctionComponent = () => {
  return (
    <Search>
      <div className="absolute right-[13px] top-[12px]">
        <SearchIcon />
      </div>
    </Search>
  );
};

export default SearchTable;
