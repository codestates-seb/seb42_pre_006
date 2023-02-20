import { Link } from 'react-router-dom';
import QuestionAskFormBody from '../components/QuestionAsk/QuestionAskFormBody';
import QuestionAskFormTags from '../components/QuestionAsk/QuestionAskFormTags';
import QuestionAskFormTitle from '../components/QuestionAsk/QuestionAskFormTitle';
import QuestionAskHeader from '../components/QuestionAsk/QuestionAskHeader';
import Button from '../components/UI/Button';

function QuestionAsk() {
  return (
    <article>
      <QuestionAskHeader />
      <QuestionAskFormTitle />
      <QuestionAskFormBody />
      <QuestionAskFormTags />
      <div className="px-8 mb-28 flex">
        {/* TODO: 버튼 라우터기능 작업 -> [Post your question]버튼 클릭시 [질문상세페이지]로 이동, 버튼 타입 [submit]으로 변경 */}
        <Button to="/questions" variant="primary" size="md">
          Post Your Answer
        </Button>
        <Link to="/">
          {/* TODO: 버튼 기능작업 -> [Cancel]버튼 클릭시 정말 닫을건지 확인하는 모달 창? 프롬프트창? 띄우기 */}
          <Button variant="danger" size="sm" text>
            Cancel
          </Button>
        </Link>
        {/* QUEST: Review post question 페이지 구현 X -> 유효성 검사 실시해야하는지? */}
      </div>
    </article>
  );
}

export default QuestionAsk;
