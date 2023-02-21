import AnswerVote from './AnswerVote'
import QuestionBody from '../Quesiton/QuestionBody'

function MainAnswer({ answerContent }) {
    return (
        <div className=' flex mt-3'>
            <AnswerVote/>
            <QuestionBody answerContent={answerContent} />
        </div>
    )
}

export default MainAnswer