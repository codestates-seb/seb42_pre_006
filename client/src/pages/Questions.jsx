import QuestionsHeader from "../components/QuestionsHeader";
import QuestionsList from "../components/QuestionsList";
import QuestionsPagination from "../components/QuestionsPagination";

function Questions() {
    return (
        <main>
            <QuestionsHeader />
            <QuestionsList />
            <QuestionsPagination />
        </main>
    );
}

export default Questions;
