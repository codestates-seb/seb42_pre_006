import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionsList from './QuestionsList';
import EmptyData from '../UI/EmptyData';
import Pagination from '../UI/Pagination';
// import QuestionsPagination from './QuestionsPagination'

function MainQuestions() {
  const [questionValue, setQuestionValue] = useState(0);
  const [page, setPage] = useState(1);

  const { data: questionValueData, pageInfo } = questionValue;

  useEffect(() => {
    const handleQuestionDate = async () => {
      try {
        const response = await axios.get(`/questions?page=${page}&size=10`);
        const { data } = response;
        setQuestionValue(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    handleQuestionDate();
  }, [page]);

  const handleClickPage = pageNum => {
    setPage(pageNum);
  };

  return (
    <>
      {questionValue ? (
        <div className="border-t">
          {questionValueData.map(question => (
            <QuestionsList key={question.questionId} question={question} />
          ))}
          <div className="my-4 text-center">
            <Pagination
              total={pageInfo.totalElements}
              page={page}
              onClick={handleClickPage}
            />
          </div>
        </div>
      ) : (
        <EmptyData />
      )}
    </>
  );
}

export default MainQuestions;
