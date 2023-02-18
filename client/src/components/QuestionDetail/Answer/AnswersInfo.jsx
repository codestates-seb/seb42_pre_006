// 필터

const AnswersInfo = () => {
  return (
    <div className="flex justify-between">
      <div className="text-lg">3 Answers</div>
      <div>
        <span className=" text-xs text-gray-600">Sorted by: </span>
        <input className=" border rounded placeholder:text-xs pl-1.5 align-middle" placeholder="dropdown"></input>
      </div>
    </div>
  );
};

export default AnswersInfo;
