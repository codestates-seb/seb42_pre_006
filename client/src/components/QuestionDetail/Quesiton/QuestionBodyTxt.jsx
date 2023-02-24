function QuestionBodyTxt({ questionContent }) {
  return (
    <div
      className=" text-left"
      dangerouslySetInnerHTML={{ __html: questionContent }}
    />
  );
}

export default QuestionBodyTxt;