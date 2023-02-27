import { createContext, useEffect, useState, useMemo } from 'react';
import axios from 'axios';

export const AnswerContext = createContext();

function AnswerProvider({ children }) {
  const [answers, setAnswers] = useState('');

  // Answer 하나 받아오기
  useEffect(() => {
    const handleAnswerData = async () => {
      try {
        const response = await axios.get('/answer');
        const { data } = response;
        setAnswers(data);
      } catch (error) {
        console.error(error);
      }
    };
    handleAnswerData();
  }, []);







  









  const value = useMemo(
    () => ({
      answers,
      setAnswers,
    }),
    [answers],
  );

  return (
    <AnswerContext.Provider value={value}>{children}</AnswerContext.Provider>
  );
}

export default AnswerProvider;
