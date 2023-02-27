function AnswerBodyTxt({ content }) {
  return (
    <div
      className="text-left min-h-[4rem]"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default AnswerBodyTxt;
