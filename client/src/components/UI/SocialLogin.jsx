import React from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import Button from "./Button";

function SocialLogin() {
  return (
    <>
      <Button
        size="md"
        block
        icon={<FcGoogle />}
        className="bg-white border-gray-300 hover:bg-gray-100 hover:border-gray-400 text-black my-1"
      >
        Login with Google
      </Button>
      <Button
        size="md"
        block
        icon={<BsGithub />}
        className="bg-gray-800 border-gray-800 text-white hover:bg-gray-900 hover:border-gray-800 my-1"
      >
        Login with Github
      </Button>
      <Button
        size="md"
        block
        icon={<ImFacebook2 />}
        className="bg-sky-800 border-sky-800 text-white hover:bg-sky-900 hover:border-sky-800 my-1"
      >
        Login with Fasebook
      </Button>
    </>
  );
}

export default SocialLogin;
