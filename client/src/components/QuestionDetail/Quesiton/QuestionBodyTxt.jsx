function QuestionBodyTxt({ answerContent }) {

  return (
      <div className=" text-left" dangerouslySetInnerHTML={{ __html: answerContent }} />
      // <div>{answerContent}</div>
  );
};

export default QuestionBodyTxt;
