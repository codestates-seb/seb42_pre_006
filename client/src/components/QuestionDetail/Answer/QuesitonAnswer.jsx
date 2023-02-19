// 모든 answer 파일 합치기

import AnswersInfo from './AnswersInfo'
import MainAnswer from './MainAnswer'
import PostAnswerBox from './PostAnswerBox'

const QuesitonAnswer = () => {
    return (
        <div className='mt-16'>
            <AnswersInfo />
            <MainAnswer/>
            <PostAnswerBox />
        </div>
    )
}

export default QuesitonAnswer