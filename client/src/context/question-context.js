import { createContext, useEffect, useState, useMemo } from 'react';
import axios from 'axios';

export const QuestionContext = createContext();

function QuestionProvider({ children }) {
  const [questions, setQuestions] = useState('');

  useEffect(() => {
    const handleQuestionData = async () => {
      try {
        const response = await axios.get('/questions');
        const { data } = response;
        setQuestions(data);
      } catch (error) {
        console.error(error);
      }
    };
    handleQuestionData();
  }, []);

  const value = useMemo(
    () => ({
      questions,
      setQuestions,
    }),
    [questions],
  );

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
}

export default QuestionProvider;
