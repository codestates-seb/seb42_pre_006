import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import Button from '../../UI/Button';
import 'react-quill/dist/quill.snow.css';

function AnswerEdit() {
  const [quillValue, setQuillValue] = useState('');
  // const [answers, setAnswers] = useState('');
  const { answerId } = useParams();
  const navigator = useNavigate()



  useEffect(() => {
    const handleAnswerData = async() => {
      try {
        const response = await axios.get(`/answer/${answerId}`);
        const { data } = response;
        setQuillValue(data.answerContent);
      } catch (error) {
        console.error(error);
      }
    }
    handleAnswerData()
  }, [])

  const handleAnswerPost = async () => {
    try {
      await axios.patch(`/answer/${answerId}`, {
        answerContent: quillValue,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitHandler = () => {
    if (quillValue.trim() === '' || quillValue.trim() ===`<p><br></p>`) {
      alert('빈 칸을 작성해 주세요');
    } else {
      handleAnswerPost();
      navigator('/detail')
    }
  }

  return (
    <div className=" flex flex-col items-start mt-16 px-8">
      <div className=" mb-4 text-lg text-left w-full">Answer Edit</div>
      <div className=" w-full">
          <div className=" w-full">
            <ReactQuill
              className="text-left"
              onChange={setQuillValue}
              value={quillValue}
            />
          </div>
          <Button onClick={onSubmitHandler} variant="primary" size="md" className="flex mt-8">
            Post Your Answer
          </Button>
      </div>
    </div>
  );
}

export default AnswerEdit;
