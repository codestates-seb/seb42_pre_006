import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AnswersInfo from './AnswersInfo';
import MainAnswer from './MainAnswer';
import PostAnswerBox from './PostAnswerBox';

function QuesitonAnswer() {
  const [answers, setAnswers] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('/answer');
        const { data } = response;
        setAnswers(data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  return (
    <div className="mt-16">
      <AnswersInfo />

      {answers ? (
        <div>
          {/* eslint-disable-next-line */}
          {answers.map(function(el) {
            return (
              <MainAnswer key={el.answerId} answerId={el.answerId} answerContent={el.answerContent} />
            );
          })}
        </div>
      ) : null}

      <PostAnswerBox />
    </div>
  );
}

export default QuesitonAnswer;
