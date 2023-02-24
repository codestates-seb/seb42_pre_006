import QuestionBodyTxt from './QuestionBodyTxt';
// import QuestionTags from './QuestionTags';
import QuestionBodyBtns from './QuestionBodyBtns';
import QuestionUserinfo from './QuestionUserinfo';

function QuestionBody({ question }) {
  return (
    <>
      {question && (
        <div className=" mt-5 flex flex-col w-full">
          <QuestionBodyTxt questionContent={question.questionContent} />
          {/* <QuestionTags questionId={question.questionId} /> */}
          <div className="flex w-full justify-between mt-7">
            <QuestionBodyBtns questionId={question.questionId} />
            <QuestionUserinfo question={question} />
          </div>
        </div>
      )}
    </>
  );
}

export default QuestionBody;
