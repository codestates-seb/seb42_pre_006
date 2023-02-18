// bodytxt, tags, btns, userinfo

import QuestionBodyTxt from "./QuestionBodyTxt";
import QuestionTags from "./QuestionTags";
import QuestionBodyBtns from "./QuestionBodyBtns";
import QuestionUserinfo from "./QuestionUserinfo";

const QuestionBody = () => {
  return (
    <div className=" mt-5 flex flex-col">
      <QuestionBodyTxt />
      <QuestionTags />
      <div className="flex justify-between ">
        <QuestionBodyBtns />
        <QuestionUserinfo />
      </div>
    </div>
  );
};

export default QuestionBody;
