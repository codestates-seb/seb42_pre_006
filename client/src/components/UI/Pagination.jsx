import classNames from 'classnames';
import React from 'react';
import Button from './Button';

function Pagination({ total, page, limit = 10, onClick }) {
  const numPages = Math.ceil(total / limit);

  const handleClickPage = pageNum => {
    window.scrollTo(0, 0);
    onClick(pageNum);
  };

  return (
    <ul className="my-6 inline-flex justify-center text-sm gap-1">
      {page > 1 && (
        <li>
          <Button
            type="button"
            size="sm"
            onClick={() => handleClickPage(page - 1)}
          >
            Prev
          </Button>
        </li>
      )}
      {Array(numPages)
        .fill()
        .map((_, index) => (
          <li key={index + 1}>
            <Button
              type="button"
              size="sm"
              onClick={() => handleClickPage(index + 1)}
              className={classNames({ 'btn-orange': page === index + 1 })}
            >
              {index + 1}
            </Button>
          </li>
        ))}
      {page < numPages && (
        <li>
          <Button
            type="button"
            size="sm"
            onClick={() => handleClickPage(page + 1)}
          >
            Next
          </Button>
        </li>
      )}
    </ul>
  );
}

export default Pagination;
