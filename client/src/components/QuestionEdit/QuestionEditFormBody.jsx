import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function QuestionEditFormBody() {
  return (
    <section className="flex flex-col px-8 py-3">
      <h2 className="font-semibold text-left">Body</h2>
      {/* TODO: 질문 수정기능 작업 -> 작성된 본문 내용 에디터로 가져오기, 에디터 높이 조정 */}
      <ReactQuill className="text-left" />
    </section>
  );
}

export default QuestionEditFormBody;
