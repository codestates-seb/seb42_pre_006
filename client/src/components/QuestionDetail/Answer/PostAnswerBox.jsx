// Toastinput 감싼 후 YourAnswer
import { Link } from "react-router-dom";

import Toastinput from "./Toastinput";

const PostAnswerBox = () => {
  return (
    <div className=" flex flex-col items-start mt-16">
      <div className=" mb-4 text-lg">Your Answer</div>
      <Toastinput />
      <div className=" mt-8 text-lg">
        Browse other questions tagged {/* Tags */} or ask
        your own question.
        {/* <Link to="/question">your own question.</Link> */}
      </div>
    </div>
  );
};

export default PostAnswerBox;
