// bodytxt, tags, btns, userinfo

import QuestionBodyTxt from './QuestionBodyTxt'
import QuestionTags from './QuestionTags'
import QuestionBodyBtns from './QuestionBodyBtns'
import QuestionUserinfo from './QuestionUserinfo'

const QuestionBody = () => {
    return (
        <div className=" flex flex-col">
            <QuestionBodyTxt />
            <QuestionTags />
            <QuestionBodyBtns />
            <QuestionUserinfo />
        </div>
    )
}

export default QuestionBody