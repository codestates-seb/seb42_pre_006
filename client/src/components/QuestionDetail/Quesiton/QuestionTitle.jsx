import dateFormat from '../../../utils/dateFormat';
import Button from '../../UI/Button';

function QuestionTitle({ question }) {
  return (
    <article className=" flex flex-col">
      <div className=" flex justify-between mb-2">
        <h1 className=" text-3xl text-left">{question.questionTitle}</h1>
        <Button to="/ask" variant="primary" size="md">
          Ask a question
        </Button>
      </div>
      <div className=" flex justify-start text-sm">
        <div className=" mb-2 mr-4">
          <span className=" text-slate-500 mr-2">Asked</span>
          <span>{dateFormat(question.createAt)}</span>
        </div>
        <div className=" mb-2 mr-4">
          <span className=" text-slate-500 mr-2">Modified</span>
          <span>{dateFormat(question.modifiedAt)}</span>
        </div>
        <div className=" mb-2 mr-4">
          <span className=" text-slate-500 mr-2">Viewed</span>
          <span>{question.viewCount} times</span>
        </div>
      </div>
      <div className=" flex w-full h-px text-center bg-gray-200 mt-3" />
    </article>
  );
}

export default QuestionTitle;
