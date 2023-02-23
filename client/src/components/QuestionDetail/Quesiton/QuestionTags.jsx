import axios from 'axios';
import { useEffect } from 'react';
import Badge from '../../UI/Badge';

function QuestionBodyTags({ questionId }) {
  const handleGetTags = async () => {
    try {
      const response = axios.get(`/questions/${questionId}/tags`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetTags();

    return () => {};
  }, []);

  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="tags">php</Badge>
      <Badge variant="tags">mariadb</Badge>
    </div>
  );
}

export default QuestionBodyTags;
