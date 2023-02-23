import React, { useContext } from 'react';

import AnswersInfo from './AnswersInfo';
import MainAnswer from './MainAnswer';
import PostAnswerBox from './PostAnswerBox';
import { AnswerContext } from '../../../context/answer-context';

function QuesitonAnswer() {

  const { answers } = useContext(AnswerContext)

  return (
    <div className="mt-16">
      <AnswersInfo />

      {answers ? (
        <div>
          {answers.map((el) =>
              <MainAnswer key={el.answerId} answerId={el.answerId} answerContent={el.answerContent} />
          )}
        </div>
      ) : null}

      <PostAnswerBox />
    </div>
  );
}

export default QuesitonAnswer;
