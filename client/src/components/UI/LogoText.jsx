import React from 'react';
import { Link } from 'react-router-dom';

function LogoText() {
  return (
    <Link to="/">
      <img
        src="http://stackoverflowpre.p-e.kr/static/media/Logo.788ad40bf6ce6ec2bbdff55b6afda940.svg"
        alt="Stack Overflow"
      />
    </Link>
  );
}

export default LogoText;
