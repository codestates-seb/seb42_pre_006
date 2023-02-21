import QuestionVote from "./QuestionVote";
import QuestionBody from "./QuestionBody";

function MainQuestion() {
    return (
        <div className=" flex ">
            <QuestionVote />
            <QuestionBody />
        </div>
    )
}

export default MainQuestion