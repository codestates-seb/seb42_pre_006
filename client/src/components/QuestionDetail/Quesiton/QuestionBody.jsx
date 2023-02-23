import QuestionBodyTxt from "./QuestionBodyTxt";
import QuestionTags from "./QuestionTags";
import QuestionBodyBtns from "./QuestionBodyBtns";
import QuestionUserinfo from "./QuestionUserinfo";

function QuestionBody({ answerId, answerContent }) {
  return (
    <div className=" mt-5 flex flex-col w-full">
      <QuestionBodyTxt answerContent={answerContent} />
      <QuestionTags />
      <div className="flex w-full justify-between mt-7">
        <QuestionBodyBtns answerId={answerId} />
        <QuestionUserinfo />
      </div>
    </div>
  );
};

export default QuestionBody;
