import React, { useState } from 'react';
import Pagination from '../UI/Pagination';

function QuestionsPagination() {
  const [page, setPage] = useState(1);

  // const totalElements = Number(pageInfo.totalElements)
  // console.log(totalElements)
  // const totalPages = Number(pageInfo.totalPages)


  
  const handleClickPage = pageNum => setPage(pageNum);


  return (
    <>
      <div className="my-4 text-center">
        <Pagination
          total={50}
          page={page}
          onClick={handleClickPage}
          limit={10}
        />
      </div>
    </>
  );
}

export default QuestionsPagination;
