const QuestionTitle = () => {
  return (
    <div className=" flex flex-col">
      <div className=" flex justify-between mb-2">
        <h1 className=" text-3xl text-left">
          MySql/mariadb - SELECT 0 = 'N;' returns true
        </h1>
        <button className="w-28 h-10 ml-3 text-sm px-1 py-1 rounded bg-sky-500 text-white font-medium">
          Ask Question
        </button>
      </div>

      <div className=" flex justify-start text-sm">
        <div className=" mb-2 mr-4">
          <span className=" text-slate-500 mr-2">Asked</span>
          <span>today</span>
        </div>
        <div className=" mb-2 mr-4">
          <span className=" text-slate-500 mr-2">Modified</span>
          <span>today</span>
        </div>
        <div className=" mb-2 mr-4">
          <span className=" text-slate-500 mr-2">Viewed</span>
          <span>4 times</span>
        </div>
      </div>
      <div className="w-screen h-px text-center bg-gray-200 mt-3"></div>
    </div>
  );
};

export default QuestionTitle;
