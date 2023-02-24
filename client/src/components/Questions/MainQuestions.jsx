import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionsList from './QuestionsList';
// import QuestionsPagination from './QuestionsPagination'

function MainQuestions() {
  const [questionValue, setQuestionValue] = useState(0);

  const questionValueData = questionValue.data
  // const { questionValuePageInfo } = questionValue.pageInfo

  useEffect(() => {
    const handleQuestionDate = async () => {
      try {
        const response = await axios.get('/questions?page=1&size=10');
        const { data } = response;
        setQuestionValue(data);
      } catch (error) {
        console.error(error);
      }
    };
    handleQuestionDate();
  }, [questionValue]);

  return (
    <>
      {questionValue ? (
        <div className="border-t">
          {questionValueData.map(el => (
            <QuestionsList
              key={el.questionId}
              questionId={el.questionId}
              questionTitle={el.questionTitle}
              questionStatus={el.questionStatus}
              viewCount={el.viewCount}
              questionVoteCount={el.questionVoteCount}
              // memberId={el.member.memberId}
              // displayName={el.member.displayName}
              createdAt={el.createdAt}
            />
          ))}
        </div>
      ) : null}
      {/* <QuestionsPagination pageInfo={questionValuePageInfo} /> */}
    </>
  );
}

export default MainQuestions;
