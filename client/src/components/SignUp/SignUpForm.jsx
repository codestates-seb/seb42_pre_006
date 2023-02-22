import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Button from '../UI/Button';
import Card from '../UI/Card';
import InputFeild from '../UI/Form/InputFeild';
import FormGroup from '../UI/Form/FormGroup';

function SignUpForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitSignUp = async ({ displayName, email, password }) => {
    try {
      const response = await axios.post('/api/v1/members', {
        email,
        password,
        displayName,
      });
      if (response) {
        navigate('/', { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="mt-4 mb-10">
      <form onSubmit={handleSubmit(handleSubmitSignUp)}>
        <div>
          <FormGroup
            label="Display name"
            type="text"
            name="displayName"
            register={register}
            errors={errors}
            validation={{ required: '이름을 입력해주세요' }}
            className="mt-0"
          >
            <InputFeild type="text" />
          </FormGroup>
          <FormGroup
            label="Email"
            type="text"
            name="email"
            register={register}
            errors={errors}
            validation={{ required: '이메일을 입력해주세요' }}
          >
            <InputFeild type="text" />
          </FormGroup>
          <FormGroup
            label="Password"
            type="password"
            name="password"
            register={register}
            errors={errors}
            validation={{ required: '비밀번호를 입력해주세요' }}
          >
            <InputFeild type="password" />
          </FormGroup>
        </div>
        <div className="mb-4 text-left">
          <p className="my-2 text-sm text-gray-500">
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </p>
        </div>
        <Button variant="primary" size="md" block type="submit">
          Sign up
        </Button>
        <div className="mt-10 text-left">
          <p className="text-xs">
            By clicking “Sign up”, you agree to our&nbsp;
            <span className=" text-blue-500">
              terms of service, privacy policy and cookie policy
            </span>
          </p>
        </div>
      </form>
    </Card>
  );
}

export default SignUpForm;
