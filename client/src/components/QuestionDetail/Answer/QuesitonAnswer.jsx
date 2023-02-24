import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import AnswersInfo from './AnswersInfo';
import MainAnswer from './MainAnswer';
import PostAnswerBox from './PostAnswerBox';

function QuesitonAnswer() {
  const [answers, setAnswers] = useState([]);
  // const params = useParams();

  useEffect(() => {
    const handleAnswerData = async () => {
      try {
        const response = await axios.get('/answer');
        const { data } = response;
        setAnswers(data);
        if (data) {
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    handleAnswerData();
  }, []);

  return (
    <div className="mt-16">
      <AnswersInfo />
      {answers ? (
        <div>
          {answers.map(answer => (
            <MainAnswer key={answer.answerId} answer={answer} />
          ))}
        </div>
      ) : null}

      <PostAnswerBox />
    </div>
  );
}

export default QuesitonAnswer;
