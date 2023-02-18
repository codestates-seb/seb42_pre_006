import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import InputFeild from "../components/UI/InputFeild";
import { ReactComponent as LogoSymbol } from "../assets/images/symbol.svg";
import SocialLogin from "../components/UI/SocialLogin";

function Login() {
  return (
    <section className="flex items-center justify-center h-full">
      <div className="w-72">
        <Link to="/">
          <LogoSymbol className="mx-auto mb-4" />
        </Link>
        <div>
          <SocialLogin />
        </div>
        <Card className="mt-4 mb-10">
          <form>
            <InputFeild label="Email" className="mt-0" />
            <InputFeild label="Password" />
            <Button variant="primary" size="md" block>
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
  );
}

export default Login;
