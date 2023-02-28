import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Button from '../UI/Button';
import Card from '../UI/Card';
import InputFeild from '../UI/Form/InputFeild';
import FormGroup from '../UI/Form/FormGroup';
import validate from '../../utils/validate';

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
            validation={validate.displayName}
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
            validation={validate.email}
          >
            <InputFeild type="text" />
          </FormGroup>
          <FormGroup
            label="Password"
            type="password"
            name="password"
            register={register}
            errors={errors}
            validation={validate.password}
          >
            <InputFeild type="password" />
          </FormGroup>
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
