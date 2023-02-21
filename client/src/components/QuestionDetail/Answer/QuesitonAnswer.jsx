import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AnswersInfo from './AnswersInfo';
import MainAnswer from './MainAnswer';
import PostAnswerBox from './PostAnswerBox';

function QuesitonAnswer() {
  const [answerContents, serAnswerContents] = useState('');

  const url =
    'http://ec2-43-201-16-212.ap-northeast-2.compute.amazonaws.com:8080';
  const config = { 'Content-Type': 'application/json' };

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${url}/answer`, config);
        const { data } = response;
        serAnswerContents(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  //   useEffect(() => {
  //     async function getPost() {
  //       try {
  //         const response = await axios.post(`${url}/api/v1/members`, {
  //             "email" : "min@st.com",
  //             "password" : "1234",
  //             "displayName": "choi"
  //            });
  //         // const { data } = response;
  //         // serAnswerContents(data);
  //         console.log(response);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //     getPost();
  //   }, []);

  return (
    <div className="mt-16">
      <AnswersInfo />
      {/* <MainAnswer /> */}

      {answerContents ? (
        <div>
          {answerContents.map(el => {
            return (
              <MainAnswer key={el.answerId} answerContent={el.answerContent} />
            );
          })}
        </div>
      ) : null}

      {/* {answerContents ? (
        <div>
          {answerContents.map((el, idx) => {
            return <div key={idx}>{el.answerContent}</div>;
          })}
        </div>
      ) : null} */}
      <PostAnswerBox />
    </div>
  );
}

export default QuesitonAnswer;
