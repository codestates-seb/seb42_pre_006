import QuestionsHeader from "../components/Questions/QuestionsHeader";
import QuestionsList from "../components/Questions/QuestionsList";
import QuestionsPagination from "../components/Questions/QuestionsPagination";

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
