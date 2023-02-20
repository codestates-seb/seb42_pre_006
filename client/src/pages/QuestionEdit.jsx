import { Link } from 'react-router-dom';
import QuestionEditAside from '../components/QuestionEdit/QuestionEditAside';
import QuestionEditFormBody from '../components/QuestionEdit/QuestionEditFormBody';
import QuestionEditFormTags from '../components/QuestionEdit/QuestionEditFormTags';
import QuestionEditFormTitle from '../components/QuestionEdit/QuestionEditFormTitle';

function QuestionEdit() {
  return (
    <article className="w-full flex h-screen">
      <div className="flex-1 relative">
        <QuestionEditFormTitle />
        <QuestionEditFormBody />
        <QuestionEditFormTags />
        <div className="px-8 absolute right-0 mt-8 mr-8">
          {/* TODO: 버튼 라우터기능 작업 -> [Edit]버튼 클릭시 [질문상세페이지]로 이동, 버튼 타입 [submit]으로 변경 */}
          <Link to="/" className="mr-3">
            <button
              type="button"
              className="text-sm bg-[#0A95FF] hover:bg-[#0074CC] text-white font-semibold py-2 px-2 border-t-2 border-[#47aefd] hover:border-[#47aefd] rounded"
            >
              Edit
            </button>
          </Link>
          <Link to="/">
            {/* TODO: 버튼 기능작업 -> [Cancel]버튼 클릭시 정말 닫을건지 확인하는 모달 창? 프롬프트창? 띄우기 */}
            <button
              type="button"
              className="text-sm hover:bg-[rgba(255,10,10,0.2)] text-[rgb(255,10,10)] font-semibold py-2 px-2 rounded"
            >
              Cancel
            </button>
          </Link>
          {/* QUEST: Review post question 페이지 구현 X -> 유효성 검사 실시해야하는지? */}
        </div>
      </div>
      <QuestionEditAside />
    </article>
  );
}

export default QuestionEdit;
