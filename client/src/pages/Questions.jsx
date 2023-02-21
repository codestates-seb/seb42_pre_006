import QuestionsHeader from '../components/Questions/QuestionsHeader';
import QuestionsList from '../components/Questions/QuestionsList';
import QuestionsPagination from '../components/Questions/QuestionsPagination';

function Questions() {
  return (
    <article className="mr-6">
      <QuestionsHeader />
      <QuestionsList />
      <QuestionsPagination />
    </article>
  );
}

export default Questions;