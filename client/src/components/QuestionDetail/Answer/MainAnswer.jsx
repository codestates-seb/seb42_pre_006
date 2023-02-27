import React from 'react';
import AnswerBody from './AnswerBody';
import AnswerVote from './AnswerVote';

function MainAnswer({ answer, onClick }) {
  return (
    <div className=" flex mt-3 border-t">
      {/* <AnswerVote answer={answer} /> */}
      <AnswerBody answer={answer} onClick={onClick} />
    </div>
  );
}

export default MainAnswer;
