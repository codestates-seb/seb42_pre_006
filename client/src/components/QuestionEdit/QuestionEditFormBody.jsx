import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function QuestionEditFormBody() {
  return (
    <section className="flex flex-col px-8 py-3">
      <h2 className="font-semibold text-left">Body</h2>
      <ReactQuill className="text-left" />
    </section>
  );
}

export default QuestionEditFormBody;
