import React from 'react';

export type GetSearchProps = {
  getSearchText: (str: React.SetStateAction<string>) => void;
};

const Search: React.FunctionComponent<GetSearchProps> = ({ children, getSearchText, ...props }) => {
  const [text, setText] = React.useState('');

  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setText(e.target.value);
    getSearchText && getSearchText(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search ..."
        className="w-full rounded-[6px] bg-white px-6 py-[10px] pr-[40px] font-normal leading-[21px] text-slateLavender outline-none"
        onChange={handleChange}
        value={text}
        {...props}
      />
      {children}
    </div>
  );
};

export default Search;
