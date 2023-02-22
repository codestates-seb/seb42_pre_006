import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import Button from '../../UI/Button';
import 'react-quill/dist/quill.snow.css';

function Quillinput() {
  const [quillValue, setQuillValue] = useState('');

 const handleAnswerPost = async() => {
    try {
      const response = await axios.post('/answer', {
        answerContent: quillValue,
      });
      console.log(response);
      // serAnswerLength(response.data.length)
    } catch (error) {
      console.error(error);
    }
  }

  function onSubmitHandler() {
    if (quillValue === '') {
      alert('빈 칸을 작성해 주세요');
    } else {
      handleAnswerPost();
      setQuillValue('');
    }
  }

  return (
    <div className=" w-full">
      {/* TODO: 에디터 modules 수정 작업 -> [textarea] 확장, [focus, outline] css 적용하기  */}
      <form onSubmit={onSubmitHandler}>
        <div className=" w-full">
          <ReactQuill
            className="text-left"
            onChange={setQuillValue}
            value={quillValue}
          />
        </div>

        <Button variant="primary" size="md" className="flex mt-8">
          Post Your Answer
        </Button>
      </form>
    </div>
  );
}

export default Quillinput;
