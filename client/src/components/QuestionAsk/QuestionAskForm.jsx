import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '../UI/Button';

function QuestionAskForm() {
  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [tagValue, setTagValue] = useState([]);

  const navigate = useNavigate();

  const handleTitle = event => {
    setTitleValue(event.target.value);
  };

  const handleContent = e => {
    setContentValue(e);
  };

  const handleTag = event => {
    setTagValue(event.target.value);
  };

  const instance = axios.create({
    debug: true,
  });

  const handlePost = async e => {
    e.preventDefault();
    try {
      const questionPost = await instance.post('/questions', {
        questionTitle: titleValue,
        questionContent: contentValue,
        tags: [
          { tagName: tagValue },
          { tagName: tagValue },
          { tagName: tagValue },
          { tagName: tagValue },
        ],
      });
      if (questionPost) {
        navigate('/questions', { replace: true });
      }
      console.log(questionPost.data);
      console.log(titleValue);
      console.log(questionPost.data.questionId);
    } catch (error) {
      console.error(error);
    }
  };

  // const modules = {
  //   toolbar: {
  //     container: [
  //       [{ header: [1, 2, 3, 4, 5, 6, false] }],
  //       [{ font: [] }],
  //       [{ align: [] }],
  //       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  //       [{ list: 'ordered' }, { list: 'bullet' }, 'link'],
  //       [
  //         {
  //           color: [
  //             '#000000',
  //             '#e60000',
  //             '#ff9900',
  //             '#ffff00',
  //             '#008a00',
  //             '#0066cc',
  //             '#9933ff',
  //             'custom-color',
  //           ],
  //         },
  //         { background: [] },
  //       ],
  //     ],
  //   },
  // };

  return (
    <>
      <h1 className="text-3xl font-semibold px-8 py-8 text-left">
        Ask a public question
      </h1>

      <div className="border rounded px-8 py-8 mx-8 my-8 bg-white text-left">
        <h2 className="font-semibold">Title</h2>
        <p className="text-sm mb-2">
          Be specific and imagine you’re asking a question to another person.
        </p>
        <input
          className="w-full border rounded px-2 py-2 text-sm focus:border focus:border-[#58A4DE] outline-offset-4 outline-[#DDEAF7]"
          type="text"
          name="title"
          placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
          onChange={handleTitle}
          value={titleValue}
        />
      </div>

      <div className="border rounded px-8 py-8 mx-8 my-8 bg-white">
        <h2 className="font-semibold text-left">
          What are the details of your problem?
        </h2>
        <p className="text-sm mb-2 text-left">
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </p>
        <ReactQuill
          className="text-left"
          name="content"
          theme="snow"
          value={contentValue}
          onChange={handleContent}
          // modules={modules}
        />
      </div>

      <div className="border rounded px-8 py-8 mx-8 my-8 bg-white">
        <h2 className="font-semibold text-left">Tags</h2>
        <p className="text-sm mb-2 text-left">
          Add up to 5 tags to describe what your question is about. Start typing
          to see suggestions.
        </p>
        <input
          className="w-full border rounded px-2 py-2 text-sm focus:border focus:border-[#58A4DE] outline-offset-4 outline-[#DDEAF7]"
          type="text"
          name="tag"
          placeholder="e.g. (wpf ios jquery)"
          onChange={handleTag}
          value={tagValue}
        />
      </div>

      <div className="px-8 mb-28 flex">
        <Button onClick={handlePost} type="submit" variant="primary" size="md">
          Post Your Answer
        </Button>
        <Button to="/questions" type="button" variant="danger" size="sm" text>
          Cancel
        </Button>
      </div>
    </>
  );
}

export default QuestionAskForm;
