import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '../components/UI/Button';
// import QuestionProvider from '../context/question-context';

function QuestionEdit() {
  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [tagValue, setTagValue] = useState([]);

  const params = useParams();
  const navigator = useNavigate();

  const handleChangeTags = e => {
    setTagValue(e.target.value);
  };

  const handleQuestionEdit = async () => {
    const tagArray = tagValue
      .trim()
      .split(' ')
      .map(tag => ({ tagName: tag }));

    const removeDuplicateTags = tagValue.trim().length > 0 && {
      tags: [...new Set(tagArray.map(JSON.stringify))].map(JSON.parse),
    };

    const formData = {
      questionTitle: titleValue,
      questionContent: contentValue,
      ...removeDuplicateTags,
    };

    try {
      const response = await axios.patch(`/questions/${params.id}`, {
        ...formData,
      });
      if (response) {
        navigator('/questions', { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleQuestionData = async () => {
      try {
        const response = await axios.get(`/questions/${params.id}`);
        const { data } = response;
        setTitleValue(data.questionTitle);
        setContentValue(data.questionContent);
        setTagValue(
          data.tags.reduce((acc, cur) => `${acc} ${cur.tagName}`, ''),
        );
      } catch (error) {
        console.error(error);
      }
    };
    handleQuestionData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="flex">
      <div className="flex-1">
        <div className="px-8 py-3">
          <h2 className="font-semibold text-left">Title</h2>
          <input
            className="w-full border rounded px-2 py-2 text-sm focus:border focus:border-[#58A4DE] outline-offset-4 outline-[#DDEAF7]"
            type="text"
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            onChange={setTitleValue}
            value={titleValue}
          />
        </div>
        <div className="flex flex-col px-8 py-3">
          <h2 className="font-semibold text-left">Body</h2>
          <ReactQuill
            onChange={setContentValue}
            value={contentValue}
            className="text-left"
          />
        </div>
        <div className="px-8 py-3">
          <h2 className="font-semibold text-left">Tags</h2>
          <input
            className="w-full border rounded px-2 py-2 text-sm focus:border bg-gray-100 focus:border-[#58A4DE] outline-offset-4 outline-[#DDEAF7]"
            type="text"
            placeholder="e.g. (wpf ios jquery)"
            onChange={handleChangeTags}
            value={tagValue}
            disabled
          />
        </div>

        <div className="flex px-8 mt-6 mb-28">
          <Button onClick={handleQuestionEdit} variant="primary" size="md">
            Edit
          </Button>
          <Link to="/questions">
            <Button variant="danger" size="sm" text>
              Cancel
            </Button>
          </Link>
        </div>
      </div>

      <div>
        <div className="flex flex-col mt-8 mr-16 border border-[rgb(228,220,193)] shadow-md">
          <h4 className="bg-[#FBF3D5] px-4 py-4 border-b border-[rgb(228,220,193)]">
            How to Edit
          </h4>
          <ul className="bg-[#FDF7E2] list-disc px-8 py-4 text-left">
            <li className="mb-2 text-sm">Correct minor typos or mistakes</li>
            <li className="mb-2 text-sm">
              Clarify meaning without changing it
            </li>
            <li className="mb-2 text-sm">Add related resources or links</li>
            <li className="mb-2 text-sm">
              <em>Always</em> respect the author&apos;s intent
            </li>
            <li className="mb-2 text-sm">
              Don&apos;t use edits to reply to the author
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default QuestionEdit;
