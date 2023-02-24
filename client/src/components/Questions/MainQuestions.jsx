import React from 'react';
import QuestionsList from './QuestionsList';
import EmptyData from '../UI/EmptyData';
import Pagination from '../UI/Pagination';

function MainQuestions({
  questionValueData,
  page,
  pageInfo,
  onClickPage: handleClickPage,
}) {
  return (
    <>
      {questionValueData && questionValueData.length > 0 ? (
        <div className="border-t">
          {questionValueData?.map(question => (
            <QuestionsList key={question.questionId} question={question} />
          ))}
          <div className="my-4 text-center">
            <Pagination
              total={pageInfo?.totalElements}
              page={page}
              onClick={handleClickPage}
            />
          </div>
        </div>
      ) : (
        <div className="ml-6">
          <EmptyData />
        </div>
      )}
    </>
  );
}

export default MainQuestions;
