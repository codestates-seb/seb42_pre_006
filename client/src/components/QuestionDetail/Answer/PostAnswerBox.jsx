// Toastinput 감싼 후 YourAnswer
import Quillinput from "./Quillinput";

function PostAnswerBox()  {
  return (
    <div className=" flex flex-col items-start mt-16">
      <div className=" mb-4 text-lg text-left w-full">Your Answer</div>
      <Quillinput />
      <div className=" mt-8 text-lg">
        Browse other questions tagged {/* Tags */} or ask
        your own question.
        {/* <Link to="/question">your own question.</Link> */}
      </div>
    </div>
  );
};

export default PostAnswerBox;
