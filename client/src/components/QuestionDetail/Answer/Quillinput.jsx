// 답변 작성 input
import Button from '../../UI/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Quillinput() {
  return (
    <div>
      {/* TODO: 에디터 modules 수정 작업 -> [textarea] 확장, [focus, outline] css 적용하기  */}
      <ReactQuill className="" />

      <Button to="/questions" variant="primary" size="md">
        Post Your Answer
      </Button>
    </div>
  );
}

export default Quillinput;
