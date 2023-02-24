import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AnswersInfo() {
  const [answerLength, serAnswerLength] = useState(0);

  useEffect(() => {
    const handleAnswerDate = async () => {
      try {
        const response = await axios.get('/answer');
        serAnswerLength(response.data.length);
      } catch (error) {
        console.error(error);
      }
    };
    handleAnswerDate();
  }, []);

  return (
    <div className="flex justify-between">
      <div className="text-lg">{answerLength} Answers</div>
    </div>
  );
}

export default AnswersInfo;
