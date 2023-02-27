import QuestionVote from './QuestionVote';
import QuestionBody from './QuestionBody';

function MainQuestion({ question, tags }) {
  return (
    <div className="flex">
      <QuestionVote question={question} />
      <QuestionBody question={question} tags={tags} />
    </div>
  );
}

export default MainQuestion;
