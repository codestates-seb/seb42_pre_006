import React from 'react';
// import axios from 'axios';
import Button from '../../UI/Button';

function QuestionBodyBtns({ questionId }) {
  // const handleAnswerDelete = async el => {
  //   try {
  //     await axios.delete(`/answer/${el}`);
  //     window.location.reload();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const AnswerDelete = el => {
  //   if (window.confirm('댓글을 삭제하시겠습니까?')) {
  //     handleAnswerDelete(el);
  //   } else {
  //     console.log();
  //   }
  // };

  return (
    <div className="h-6 flex text-gray-500 text-sm font-medium">
      <Button text size="sm">
        Share
      </Button>
      <Button to={`/questions/${questionId}/edit`} text size="sm">
        Edit
      </Button>
      <Button text size="sm" variant="danger">
        Delete
      </Button>
    </div>
  );
}

export default QuestionBodyBtns;
