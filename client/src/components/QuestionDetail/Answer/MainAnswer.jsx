import React from 'react';
import AnswerBody from './AnswerBody';
import AnswerVote from './AnswerVote';

function MainAnswer({ answer, onClick }) {
  return (
    <div className=" flex mt-3">
      <AnswerVote />
      <AnswerBody answer={answer} onClick={onClick} />
    </div>
  );
}

export default MainAnswer;
