import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import QuestionTitle from '../components/QuestionDetail/Quesiton/QuestionTitle';
import MainQuestion from '../components/QuestionDetail/Quesiton/MainQuestion';
import QuesitonAnswer from '../components/QuestionDetail/Answer/QuesitonAnswer';

function QuestionDetail() {
  const params = useParams();
  const [questionDetail, setQuestionDetail] = useState({});
  const [tags, setTags] = useState([]);

  const handleGetQuestionDetail = useCallback(async () => {
    try {
      const response = await axios.get(`/questions/${params.id}`);
      const { data } = response;
      setQuestionDetail(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleGetTags = useCallback(async () => {
    try {
      const response = await axios.get(`/questions/${params.id}/tags`);
      const { data } = response;
      setTags(data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    handleGetQuestionDetail();
    handleGetTags();
  }, []);

  return (
    <div className=" py-2 px-5">
      {questionDetail && (
        <>
          <QuestionTitle question={questionDetail} />
          <MainQuestion question={questionDetail} tags={tags} />
          <QuesitonAnswer questionId={params.id} />
        </>
      )}
    </div>
  );
}

export default QuestionDetail;
