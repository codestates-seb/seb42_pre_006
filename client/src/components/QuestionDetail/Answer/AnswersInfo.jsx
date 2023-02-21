import React, { useState } from 'react';
import axios from 'axios';

function AnswersInfo() {
  const [answerLength, serAnswerLength] = useState(0)

  const url = 'http://localhost:8080';
  const config = {"Content-Type": 'application/json'};
  
  axios.get(`${url}/answer`, config)
  .then(res => {
    serAnswerLength(res.data.length)
  })

  return (
    <div className="flex justify-between">
      <div className="text-lg">{answerLength} Answers</div>
    </div>
  );
}

export default AnswersInfo;
