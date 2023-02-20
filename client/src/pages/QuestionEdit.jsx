import { Link } from 'react-router-dom';
import QuestionEditAside from '../components/QuestionEdit/QuestionEditAside';
import QuestionEditFormBody from '../components/QuestionEdit/QuestionEditFormBody';
import QuestionEditFormTags from '../components/QuestionEdit/QuestionEditFormTags';
import QuestionEditFormTitle from '../components/QuestionEdit/QuestionEditFormTitle';
import Button from '../components/UI/Button';

function QuestionEdit() {
  return (
    <article className="flex">
      <div className="flex-1">
        <QuestionEditFormTitle />
        <QuestionEditFormBody />
        <QuestionEditFormTags />

        <div className="flex px-8 mt-6 mb-28">
          {/* TODO: 버튼 라우터기능 작업 -> [Edit]버튼 클릭시 [질문상세페이지]로 이동, 버튼 타입 [submit]으로 변경 */}
          <Button to="/questions" variant="primary" size="md">
            Edit
          </Button>
          <Link to="/">
            {/* TODO: 버튼 기능작업 -> [Cancel]버튼 클릭시 정말 닫을건지 확인하는 모달 창? 프롬프트창? 띄우기 */}
            <Button variant="danger" size="sm" text>
              Cancel
            </Button>
          </Link>
          {/* QUEST: Review post question 페이지 구현 X -> 유효성 검사 실시해야하는지? */}
        </div>
      </div>
      <QuestionEditAside />
    </article>
  );
}

export default QuestionEdit;
