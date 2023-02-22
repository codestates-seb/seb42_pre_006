import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AnswersInfo from './AnswersInfo';
import MainAnswer from './MainAnswer';
import PostAnswerBox from './PostAnswerBox';

function QuesitonAnswer() {
  const [answerContents, serAnswerContents] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('/answer');
        const { data } = response;
        serAnswerContents(data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  return (
    <div className="mt-16">
      <AnswersInfo />
      {/* <MainAnswer /> */}

      {answerContents ? (
        <div>
          {/* eslint-disable-next-line */}
          {answerContents.map(function(el) {
            return (
              <MainAnswer key={el.answerId} answerContent={el.answerContent} />
            );
          })}
        </div>
      ) : null}

      <PostAnswerBox />
    </div>
  );
}

export default QuesitonAnswer;
