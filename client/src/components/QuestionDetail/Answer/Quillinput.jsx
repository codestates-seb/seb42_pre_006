// 답변 작성 input
import ReactQuill from 'react-quill';
import Button from '../../UI/Button';
import 'react-quill/dist/quill.snow.css';

function Quillinput() {
  return (
    <div className=" w-full">
      {/* TODO: 에디터 modules 수정 작업 -> [textarea] 확장, [focus, outline] css 적용하기  */}
      <div className=" w-full">
        <ReactQuill className='text-left'/>
      </div>

      <Button to="/questions" variant="primary" size="md" className="flex mt-8">
        Post Your Answer
      </Button>
    </div>
  );
}

export default Quillinput;
