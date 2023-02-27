import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../../UI/Button';

function QuestionBodyBtns({ questionId }) {
  const navigate = useNavigate();
  const handleDeleteQueston = async () => {
    try {
      const response = await axios.delete(`/questions/${questionId}`);
      if (response) {
        navigate('/questions', { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleConfirmDelete = el => {
    if (window.confirm('질문을 삭제하시겠습니까?')) {
      handleDeleteQueston(el);
    }
  };

  return (
    <div className="h-6 flex text-gray-500 text-sm font-medium">
      {/* <Button text size="sm">
        Share
      </Button> */}
      <Button to={`/questions/${questionId}/edit`} text size="sm">
        Edit
      </Button>
      {/* <Button text size="sm" variant="danger" onClick={handleConfirmDelete}>
        Delete
      </Button> */}
    </div>
  );
}

export default QuestionBodyBtns;
