import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '../UI/Button';

function QuestionAskForm() {
  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [tagValue, setTagValue] = useState([]);

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
          { tagName: 'html5' },
          { tagName: 'java' },
          { tagName: 'react' },
        ],
      });
      console.log(questionPost.data);
      console.log(titleValue);
    } catch (error) {
      console.error(error);
    }
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, 'link'],
        [
          {
            color: [
              '#000000',
              '#e60000',
              '#ff9900',
              '#ffff00',
              '#008a00',
              '#0066cc',
              '#9933ff',
              'custom-color',
            ],
          },
          { background: [] },
        ],
        ['image', 'video'],
        ['clean'],
      ],
    },
  };

  return (
    <section>
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
        {/* TODO: 에디터 modules 수정 작업 -> [textarea] 확장, [focus, outline] css 적용하기  */}
        <ReactQuill
          className="text-left"
          name="content"
          theme="snow"
          modules={modules}
          value={contentValue}
          onChange={handleContent}
        />
      </div>

      <div className="border rounded px-8 py-8 mx-8 my-8 bg-white">
        <h2 className="font-semibold text-left">Tags</h2>
        <p className="text-sm mb-2 text-left">
          Add up to 5 tags to describe what your question is about. Start typing
          to see suggestions.
        </p>
        {/* TODO: 태그 기능작업 -> 태그추가,삭제 및 검색어로 태그종류찾기(드롭다운) */}
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
        {/* TODO: 버튼 라우터기능 작업 -> [Post your question]버튼 클릭시 [질문상세페이지]로 이동, 버튼 타입 [submit]으로 변경 */}
        <Button onClick={handlePost} type="submit" variant="primary" size="md">
          Post Your Answer
        </Button>
        {/* TODO: 버튼 기능작업 -> [Cancel]버튼 클릭시 정말 닫을건지 확인하는 모달 창? 프롬프트창? 띄우기 */}
        <Button to="/questions" type="button" variant="danger" size="sm" text>
          Cancel
        </Button>
        {/* QUEST: Review post question 페이지 구현 X -> 유효성 검사 실시해야하는지? */}
      </div>
    </section>
  );
}

export default QuestionAskForm;
