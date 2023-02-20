import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function QuestionAskFormBody() {
  return (
    <section className="border rounded px-8 py-8 mx-8 my-8 bg-white">
      <h2 className="font-semibold text-left">What are the details of your problem?</h2>
      <p className="text-sm mb-2 text-left">
        Introduce the problem and expand on what you put in the title. Minimum
        20 characters.
      </p>
      {/* TODO: 에디터 modules 수정 작업 -> [textarea] 확장, [focus, outline] css 적용하기  */}
      <ReactQuill className="" />
    </section>
  );
}

export default QuestionAskFormBody;
