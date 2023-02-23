import QuestionVote from './QuestionVote';
import QuestionBody from './QuestionBody';

function MainQuestion({ question }) {
  return (
    <div className=" flex ">
      <QuestionVote question={question} />
      <QuestionBody question={question} />
    </div>
  );
}

export default MainQuestion;
