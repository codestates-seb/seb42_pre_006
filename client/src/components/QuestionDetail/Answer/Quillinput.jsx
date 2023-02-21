import React, { useState, useCallback } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import Button from '../../UI/Button';
import 'react-quill/dist/quill.snow.css';

function Quillinput() {
  const [quillValue, setQuillValue] = useState('');

  const BASE_URL = 'http://localhost:8080';

  const questionInput = useCallback(async () => {
    try {
      await axios.post(`${BASE_URL}/answer`, {
        answerContent: 'Test Post 02',
      });
      console.log('good!');
      console.log('quillValue');
      setQuillValue('');
    } catch (error) {
      console.log('error');
    }
  });

  function onQuillChange(e) {
    setQuillValue(e.target.value);
    console.log(quillValue);
  }

  return (
    <div className=" w-full">
      {/* TODO: 에디터 modules 수정 작업 -> [textarea] 확장, [focus, outline] css 적용하기  */}
      <div className=" w-full">
        <ReactQuill
          className="text-left"
          onChange={() => onQuillChange()}
          value={quillValue}
        />
      </div>

      <button onClick={questionInput} type="button">
        button
      </button>

      <Button variant="primary" size="md" className="flex mt-8">
        Post Your Answer
      </Button>
    </div>
  );
}

export default Quillinput;
