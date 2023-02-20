// 필터

function AnswersInfo() {
  return (
    <div className="flex justify-between">
      <div className="text-lg">3 Answers</div>
      <div>
        <span className=" text-xs text-gray-600">Sorted by: {/* 댓글 정렬 기능 작업 */}</span>
        <input className=" border rounded placeholder:text-xs pl-1.5 align-middle" placeholder="dropdown"></input>
      </div>
    </div>
  );
};

export default AnswersInfo;
