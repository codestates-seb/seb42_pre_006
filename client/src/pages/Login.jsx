import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import InputFeild from '../components/UI/Form/InputFeild';
import { ReactComponent as LogoSymbol } from '../assets/images/symbol.svg';
import SocialLogin from '../components/UI/SocialLogin';
import { AuthContext } from '../context/auth-context';
import FormGroup from '../components/UI/Form/FormGroup';

function Login() {
  const { handleLogin } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: 'codestates@gmail.com',
      password: '123456',
    },
  });

  const handleSubmitLogin = () => {
    handleLogin();
  };

  return (
    <article>
      <section className="flex items-center justify-center h-full">
        <div className="w-72">
          <Link to="/">
            <LogoSymbol className="mx-auto mb-4" />
          </Link>
          <div>
            <SocialLogin />
          </div>
          <Card className="mt-4 mb-10">
            <form onSubmit={handleSubmit(handleSubmitLogin)}>
              <FormGroup
                label="Email"
                id="email"
                name="email"
                register={register}
                errors={errors}
                validation={{
                  required: '이메일을 입력해주세요',
                }}
                className="mt-0"
              >
                <InputFeild type="text" placeholder="email" />
              </FormGroup>
              <FormGroup
                label="Password"
                name="password"
                type="password"
                register={register}
                errors={errors}
                validation={{
                  required: '비밀번호를 입력해주세요',
                }}
              >
                <InputFeild type="password" placeholder="password" />
              </FormGroup>
              <Button variant="primary" size="md" block type="submit">
                Log in
              </Button>
            </form>
          </Card>
          <div className="text-sm">
            <p>
              <span className="mr-2">Don’t have an account?</span>
              <Link to="/signup" className="text-blue-600 hover:text-blue-400">
                Sign up
              </Link>
            </p>
            <p>
              <span className="mr-2">Are you an employer?</span>
              <Link to="/signup" className="text-blue-600 hover:text-blue-400">
                Sign up on Talent
              </Link>
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Login;
