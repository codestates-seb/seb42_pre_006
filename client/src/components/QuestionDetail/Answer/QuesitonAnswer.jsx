import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import AnswersInfo from './AnswersInfo';
import MainAnswer from './MainAnswer';
import PostAnswerBox from './PostAnswerBox';

function QuesitonAnswer({ questionId }) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const handleAnswerData = async () => {
      try {
        const response = await axios.get(`/questions/${questionId}/answers`);
        const { data } = response;
        setAnswers(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    handleAnswerData();
  }, []);

  return (
    <div className="mt-16">
      {answers && answers.length > 0 && (
        <>
          <AnswersInfo answersCount={answers.answersCount} />
          <div>
            {answers?.map(answer => (
              <MainAnswer key={answer.answerId} answer={answer} />
            ))}
          </div>
        </>
      )}
      <PostAnswerBox />
    </div>
  );
}

export default QuesitonAnswer;
