// Toastinput 감싼 후 YourAnswer

import Toastinput from './Toastinput'

const PostAnswerBox = () => {
    return (
        <div className=' flex flex-col items-start mt-16'>
            <div className=' mb-4'>Your Answer</div>
            <Toastinput />
        </div>
    )
}

export default PostAnswerBox