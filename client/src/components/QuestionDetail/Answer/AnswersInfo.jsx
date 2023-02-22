import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AnswersInfo() {
  const [answerLength, serAnswerLength] = useState(0)
  
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('/answer')
          serAnswerLength(response.data.length)
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [answerLength])
  
  return (
    <div className="flex justify-between">
      <div className="text-lg">{answerLength} Answers</div>
    </div>
  );
}

export default AnswersInfo;
