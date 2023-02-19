// answer vote와 questionbody 불러오기

import AnswerVote from './AnswerVote'
import QuestionBody from '../Quesiton/QuestionBody'

const MainAnswer = () => {
    return (
        <div className=' flex mt-3'>
            <AnswerVote/>
            <QuestionBody  />
        </div>
    )
}

export default MainAnswer