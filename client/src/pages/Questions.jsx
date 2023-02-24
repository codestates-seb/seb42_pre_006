// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
// import axios from 'axios';
import Button from '../UI/Button';

function QuestionsList() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios.get('/questions/12').then(res => {
  //     setData(res.data.questionContent);
  //     console.log(res.data);
  //   });
  // }, []);

  return (
    <>
      <div className="mb-3">
        <div className="flex content-center justify-between mb-6">
          <h1 className="text-3xl font-medium ml-6">All Questions</h1>

          <Link to="/ask">
            <Button variant="primary" size="md">
              Ask Question
            </Button>
          </Link>
        </div>

        <div className=" flex content-center justify-between">
          {/* <div dangerouslySetInnerHTML={{ __html: data }} /> */}
          <span className="text-lg ml-6">123,456,789 questions</span>
          <div className=" border border-[#6a737c] rounded text-xs">
            <button
              type="button"
              className="bg-[#e3e6e8] text-[#3b4045] py-2 px-2  rounded-l border-r border-[#6a737c]"
            >
              Newest
            </button>
            <button
              type="button"
              className="text-[#6a737c] py-2 px-2 border-r border-[#6a737c]  hover:bg-[#edeff1]"
            >
              Active
            </button>
            <button
              type="button"
              className="text-[#6a737c] py-2 px-2 border-r border-[#6a737c] hover:bg-[#edeff1]"
            >
              Bountied
              <span className="bg-[#0074cc] font-semibold text-white py-0 px-1 rounded mx-1">
                292
              </span>
            </button>
            <button
              type="button"
              className="text-[#6a737c] py-2 px-2 border-r border-[#6a737c] hover:bg-[#edeff1]"
            >
              Unanswered
            </button>
            <button
              type="button"
              className="text-[#6a737c] py-2 px-2 hover:bg-[#edeff1]"
            >
              More
              <IoMdArrowDropdown className="inline" />
            </button>
          </div>
        </div>
      </div>

      <ul className="border-t text-left">
        <li className="border-b py-6 px-8 bg-[#FDF7E2] relative">
          <div className="text-xs mb-2">
            <span className="mr-2 font-medium">0 votes</span>
            <span className="mr-2">0 answers</span>
            <span>2 views</span>
          </div>

          <h4 className="text-lg text-[#0063bf] font-medium cursor-pointer hover:text-[#0A95FF]">
            PostgreSQL migration from id(bigint) to id(uuid) while preserving
            relations
          </h4>
          <p className="text-sm truncate">
            Now I somehow need to preserve relations, so for example, if I have
            a table users that has person_id (bigint) column, this should get
            migrated to person_id (uuid) and maintain the relationship. How can
            I do this without losing any data?
          </p>

          <div className="mt-2">
            <button
              type="button"
              className="mr-2 text-sm text-[#39739d] bg-[#E1ECF4] px-2 py-1 rounded hover:bg-[#cfdbe5]"
            >
              tag1
            </button>
            <button
              type="button"
              className="mr-2 text-sm text-[#39739d] bg-[#E1ECF4] px-2 py-1 rounded hover:bg-[#cfdbe5]"
            >
              tag2
            </button>
            <button
              type="button"
              className="text-sm text-[#39739d] bg-[#E1ECF4] px-2 py-1 rounded hover:bg-[#cfdbe5]"
            >
              tag3
            </button>
          </div>

          <div className="absolute right-8 bottom-8">
            <img
              className="w-4 h-4 inline mr-1"
              src="https://www.nicepng.com/png/detail/31-315310_react-hexagon-react-js-transparent-background.png"
              alt="user_image"
            />
            <span className="text-xs">
              Kim Coding <strong>20</strong> asked 1 min ago
            </span>
          </div>
        </li>
      </ul>

      <div>
        <ul className="ml-8 my-20 flex text-sm">
          <li className="border rounded mx-0.5 flex content-center justify-center hover:bg-[#D6D9DC]">
            <button type="button" className="px-2 py-1">
              Prev
            </button>
          </li>
          <li className="border rounded mx-1 hover:bg-[#D6D9DC]">
            <button type="button" className="px-2 py-1">
              1
            </button>
          </li>
          <li className="border rounded mx-1 bg-[#F48224] text-white font-medium border-[#F48224]">
            <button type="button" className="px-2 py-1">
              2
            </button>
          </li>
          <li className="border rounded mx-1 hover:bg-[#D6D9DC]">
            <button type="button" aria-current="page" className="px-2 py-1">
              3
            </button>
          </li>
          <li className="border rounded mx-1 hover:bg-[#D6D9DC]">
            <button type="button" className="px-2 py-1">
              Next
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default QuestionsList;