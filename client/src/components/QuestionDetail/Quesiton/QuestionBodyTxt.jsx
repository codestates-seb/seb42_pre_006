function QuestionBodyTxt({ answerContent }) {

  // const [answerContents, serAnswerContents] = useState('')

  // const url = 'http://ec2-43-201-16-212.ap-northeast-2.compute.amazonaws.com:8080';
  // const config = {"Content-Type": 'application/json'};
  
  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await axios.get(`${url}/answer`, config)
  //       const { data } = response
  //       serAnswerContents(data)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   getData()
  // }, [])

  return (
    <section>
      <div className=" text-left">
        {answerContent}
{/* {answerContents.answerContents} */}

        {/* {answerContents
        ? (<div>
          {answerContents.map((el, idx) => {
            return (
              <div key={idx}>{el.answerContent}</div>
            )
          })}
        </div>)
        : null
        } */}
      </div>
    </section>
  );
};

export default QuestionBodyTxt;
