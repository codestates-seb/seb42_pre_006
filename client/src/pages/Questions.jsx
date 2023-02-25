import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import QuestionsHeader from '../components/Questions/QuestionsHeader';
import MainQuestions from '../components/Questions/MainQuestions';

function Questions() {
  const [questionValue, setQuestionValue] = useState({});
  const [page, setPage] = useState(1);

  const { data: questionValueData = [], pageInfo = {} } = questionValue;

  const handleQuestionData = useCallback(async () => {
    try {
      const response = await axios.get(`/questions?page=${page}&size=10`);
      const { data } = response;
      setQuestionValue(data);
    } catch (error) {
      console.error(error);
    }
  }, [page]);

  useEffect(() => {
    handleQuestionData();
  }, [page]);

  const handleClickPage = pageNum => {
    setPage(pageNum);
  };

  return (
    <article className="mr-6">
      {questionValue && (
        <>
          <QuestionsHeader total={pageInfo.totalElements} />
          <MainQuestions
            questionValueData={questionValueData}
            pageInfo={pageInfo}
            page={page}
            onClickPage={handleClickPage}
          />
        </>
      )}
    </article>
  );
}

export default Questions;
