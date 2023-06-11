import React from 'react';
import { SearchIcon } from '@components/icons';
import Search from '@components/ui/search/Search';
import type { GetSearchProps } from '@components/ui/search/Search';

const SearchTable: React.FunctionComponent<GetSearchProps> = ({ getSearchText }) => {
  return (
    <Search getSearchText={getSearchText}>
      <div className="absolute right-[13px] top-[12px]">
        <SearchIcon />
      </div>
    </Search>
  );
};

export default SearchTable;
