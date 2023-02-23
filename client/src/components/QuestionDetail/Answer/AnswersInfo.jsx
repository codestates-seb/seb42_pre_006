import React, { useState } from 'react';
import axios from 'axios';

function AnswersInfo() {
  const [answerLength, serAnswerLength] = useState(0);

  axios.get('/answer').then(res => {
    serAnswerLength(res.data.length);
  });

  return (
    <div className="flex justify-between">
      <div className="text-lg">{answerLength} Answers</div>
    </div>
  );
}

export default AnswersInfo;
