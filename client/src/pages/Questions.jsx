import QuestionsHeader from "../components/QuestionsHeader";
import QuestionsList from "../components/QuestionsList";
import QuestionsPagination from "../components/QuestionsPagination";

function Questions() {
    return (
        <article>
            <QuestionsHeader />
            <QuestionsList />
            <QuestionsPagination />
        </article>
    );
}

export default Questions;
