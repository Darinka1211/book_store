import React from 'react';
import classNames from "classnames";
import ReactPaginate from 'react-paginate';
import Left from './icons/Left.svg';
import Right from './icons/Right.svg';
import './Pagination.scss';

type PaginationProps = {
  className?: string;
  initialPage?: number;
  marginPagesDisplayed?: number;
  pagesCount: number;
  pageRangeDisplayed?: number;
  onChange?: ({ selected }: { selected: number }) => void;
};

export const Pagination = ({
  className,
  initialPage,
  marginPagesDisplayed = 3,
  pagesCount,
  pageRangeDisplayed = 3,
  onChange,
}: PaginationProps) => {
  return (
    <ReactPaginate
      initialPage={initialPage}
      marginPagesDisplayed={marginPagesDisplayed}
      pageCount={pagesCount}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={onChange}
      containerClassName={classNames("Pagination", className)}
      activeClassName="Pagination__active"
      pageLinkClassName="Pagination__page-link"
      breakLinkClassName="Pagination__page-link"
      nextLinkClassName="Pagination__page-link"
      previousLinkClassName="Pagination__page-link"
      pageClassName="Pagination__page-item"
      breakClassName="Pagination__page-item"
      nextClassName="Pagination__page-item"
      previousClassName="Pagination__page-item"
      previousLabel={
        <>
          <Left />
        </>
      }
      nextLabel={
        <>
          <Right />
        </>
      }
    />
  );
};
