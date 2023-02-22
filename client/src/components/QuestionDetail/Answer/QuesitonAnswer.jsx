import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AnswersInfo from './AnswersInfo';
import MainAnswer from './MainAnswer';
import PostAnswerBox from './PostAnswerBox';

function QuesitonAnswer() {
  const [answerContents, serAnswerContents] = useState('');

  const url = 'http://ec2-3-38-211-158.ap-northeast-2.compute.amazonaws.com:8080'
  const config = { 'Content-Type': 'application/json' };

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${url}/answer`, config);
        const { data } = response;
        serAnswerContents(data);
        console.log(data);
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
