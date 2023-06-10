import React from 'react';
import { usePagination, DOTS } from 'hooks/usePagination';

type Props = {
  onPageChange: (_: number | string) => void;
  totalCount: number;
  siblingCount?: 1 | undefined;
  currentPage: number;
  pageSize: number;
  className: string | string[];
  showComponent?: React.ReactElement;
};

const Pagination: React.FunctionComponent<Props> = props => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className, showComponent } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="flex items-center justify-between">
      {showComponent}
      <ul className={['pagination-container', className].join(' ')}>
        {/* Left navigation arrow */}
        <li className={['pagination-item', currentPage === 1 ? 'disabled' : ''].join(' ')} onClick={onPrevious}>
          <div className="arrow left" />
        </li>
        {paginationRange.map((pageNumber, _) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }

          // Render our Page Pills
          return (
            <li
              key={_}
              className={['pagination-item', pageNumber === currentPage ? 'selected' : ''].join(' ')}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        {/*  Right Navigation arrow */}
        <li className={['pagination-item', currentPage === lastPage ? 'disabled' : ''].join(' ')} onClick={onNext}>
          <div className="arrow right" />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
