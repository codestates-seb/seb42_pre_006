// 컴포넌트 다 불러오기

import QuestionTitle from "../components/QuestionDetail/Quesiton/QuestionTitle";
import MainQuestion from "../components/QuestionDetail/Quesiton/MainQuestion";
import QuesitonAnswer from "../components/QuestionDetail/Answer/QuesitonAnswer";


const QuestionDetail = () => {
  return (
    <>
      <QuestionTitle />
      <MainQuestion />
      <QuesitonAnswer />
    </>
  );
};

export default QuestionDetail;