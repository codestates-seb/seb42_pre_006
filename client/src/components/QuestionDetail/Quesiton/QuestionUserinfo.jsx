import dateFormat from '../../../utils/dateFormat';

function QuestionUserinfo({ question }) {
  return (
    <div className=" w-52 px-2 pt-1.5 pb-2.5 bg-blue-100 text-left rounded">
      <div className="flex text-xs text-gray-400 ">
        asked {dateFormat(question.createAt)}
      </div>
      <div className="flex mt-1.5">
        <div className=" w-8 h-8 bg-white rounded overflow-hidden">
          {question.questionId && (
            <img
              src={`https://picsum.photos/id/${question.questionId}/200/200`}
              alt={question.questionId}
            />
          )}
        </div>
        <div className="text-xs ml-2">
          <p className="text-cyan-700 hover:text-cyan-600 font-medium">
            {(question.member && question.member[0]?.displayName) ||
              'anonymous'}
          </p>
          <div>
            <span className="font-bold text-gray-500">2,249</span>
            <span className=" ml-1 mr-1.5">• 4</span>
            <span className=" ml-1 mr-1.5">• 28</span>
            <span className=" ml-1 mr-1.5">• 61</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionUserinfo;
