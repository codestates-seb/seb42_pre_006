import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import QuestionTitle from '../components/QuestionDetail/Quesiton/QuestionTitle';
import MainQuestion from '../components/QuestionDetail/Quesiton/MainQuestion';
import QuesitonAnswer from '../components/QuestionDetail/Answer/QuesitonAnswer';

function QuestionDetail() {
  const params = useParams();
  const [questionDetail, setQuestionDetail] = useState();

  const handleGetQuestionDetail = async () => {
    try {
      const response = await axios.get(`/questions/${params.id}`);
      const { data } = response;
      setQuestionDetail(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetQuestionDetail();
  }, []);

  return (
    <div className=" py-2 px-5">
      {questionDetail && (
        <>
          <QuestionTitle question={questionDetail} />
          <MainQuestion question={questionDetail} />
          <QuesitonAnswer question={questionDetail} />
        </>
      )}
    </div>
  );
}

export default QuestionDetail;
