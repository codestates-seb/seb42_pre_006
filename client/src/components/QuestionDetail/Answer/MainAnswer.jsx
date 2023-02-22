import React from 'react'
import AnswerVote from './AnswerVote'
import QuestionBody from '../Quesiton/QuestionBody'

function MainAnswer({ answerId, answerContent,onClick }) {

    return (
        <div className=' flex mt-3'>
            <AnswerVote/>
            <QuestionBody answerId={answerId} answerContent={answerContent} onClick={onClick} />
        </div>
    )
}

export default MainAnswer