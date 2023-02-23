import AnswerBodyTxt from './AnswerBodyTxt';
import AnswerBodyBtns from './AnswerBodyBtns';
import AnswerUserinfo from './AnswerUserinfo';

function AnswerBody({ answer }) {
  return (
    <>
      {answer && (
        <div className=" mt-5 flex flex-col w-full">
          <AnswerBodyTxt content={answer.answerContent} />
          <div className="flex w-full justify-between mt-7">
            <AnswerBodyBtns id={answer.answerId} />
            <AnswerUserinfo answer={answer} />
          </div>
        </div>
      )}
    </>
  );
}

export default AnswerBody;
