import Button from '../../UI/Button';

function QuestionTitle() {
  return (
    <article className=" flex flex-col">
      <div className=" flex justify-between mb-2">
        <h1 className=" text-3xl text-left">
          MySql/mariadb - SELECT 0 = 'N;' returns true
        </h1>
        <Button to="/questions" variant="primary" size="md">
          Ask a question
        </Button>
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
      <div className=" flex w-full h-px text-center bg-gray-200 mt-3"></div>
    </article>
  );
};

export default QuestionTitle;
