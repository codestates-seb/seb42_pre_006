const validate = {
  email: {
    required: '이메일을 입력해주세요',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
      message: '이메일 형식이 아닙니다.',
    },
  },
  password: {
    required: '비밀번호를 입력해주세요',
    pattern: {
      value:
        /^(?=.*[A-Za-z\d])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
      message:
        '영문 / 숫자 / 특수문자 (@$!%*#?&) 를 최소 1글자 이상 포함하여 8자 이상 입력해주세요 ',
    },
  },
  displayName: {
    required: '이름을 입력해주세요',
    pattern: {
      value: /^[가-힣A-Za-z\d_-]{6,}$/i,
      message:
        "한글/영문(대소문자)/숫자 6자 이상이여야 합니다. (특수문자는  '-' , '_' 만 허용)",
    },
  },
  tag: {
    required: '태그를 입력해주세요',
    pattern: {
      value: /^[a-z\s\d-]{2,}$/i,
      message:
        "태그 이름은 영소문자 10자 이하여야 합니다. (특수문자는 '-'만 허용)",
    },
  },
};

export default validate;
