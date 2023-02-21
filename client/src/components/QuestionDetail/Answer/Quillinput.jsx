import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import Button from '../../UI/Button';
import 'react-quill/dist/quill.snow.css';

function Quillinput() {
  const [quillValue, setQuillValue] = useState('');

  const url = 'http://ec2-3-38-211-158.ap-northeast-2.compute.amazonaws.com:8080'
  console.log(quillValue);
  // const config = {"Content-Type": 'application/json'};

  async function getPost() {
    try {
      const response = await axios.post(`${url}/answer`, {
        answerContent: quillValue,
      });
      console.log(response);
      // serAnswerLength(response.data.length)
    } catch (error) {
      console.error(error);
    }
  }

  function onSubmit() {
    if (quillValue === '') {
      alert('빈 칸을 작성해 주세요');
    } else {
      getPost();
      setQuillValue('');
    }
  }

  return (
    <div className=" w-full">
      {/* TODO: 에디터 modules 수정 작업 -> [textarea] 확장, [focus, outline] css 적용하기  */}
      <form onSubmit={onSubmit}>
        <div className=" w-full">
          <ReactQuill
            className="text-left"
            onChange={setQuillValue}
            value={quillValue}
          />
        </div>

        <button type="submit">button</button>

        <Button variant="primary" size="md" className="flex mt-8">
          Post Your Answer
        </Button>
      </form>
    </div>
  );
}

export default Quillinput;
