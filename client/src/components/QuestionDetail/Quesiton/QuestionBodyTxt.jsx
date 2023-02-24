function QuestionBodyTxt({ answerContent }) {

  return (
      <div className=" text-left" dangerouslySetInnerHTML={{ __html: answerContent }} />
  );
};

export default QuestionBodyTxt;
