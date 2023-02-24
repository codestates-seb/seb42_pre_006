function QuestionBodyTxt({ questionContent }) {
  return (
    <div
      className="text-left min-h-[16rem]"
      dangerouslySetInnerHTML={{ __html: questionContent }}
    />
  );
}

export default QuestionBodyTxt;
