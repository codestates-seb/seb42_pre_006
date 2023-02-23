import React, { useState, useMemo } from 'react';
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

  const onSubmitHandler = () => {
    if (quillValue === '') {
      alert('빈 칸을 작성해 주세요');
    } else {
      handleAnswerPost();
      setQuillValue('');
      window.location.reload();
    }
  }


  const modules = useMemo(
    () => ({
        toolbar: { // 툴바에 넣을 기능들을 순서대로 나열하면 된다.
            container: [
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ size: ["small", false, "large", "huge"] }, { color: [] }],
                [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                    { align: [] },
                ],
                ["image", "video"],
            ],
        },
    }), []);

  return (
    <div className=" w-full">
      {/* TODO: 에디터 modules 수정 작업 -> [textarea] 확장, [focus, outline] css 적용하기  */}
      {/* <form onSubmit={onSubmitHandler}> */}
        <div className=" w-full">
          <ReactQuill
            className="text-left"
            onChange={setQuillValue}
            value={quillValue}
            modules={modules}
          />
        </div>

        <Button onClick={onSubmitHandler} variant="primary" size="md" className="flex mt-8">
          Post Your Answer
        </Button>
      {/* </form> */}
    </div>
  );
}

export default Quillinput;
