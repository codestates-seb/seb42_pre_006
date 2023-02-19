import React from "react";
import { RiQuestionnaireFill } from "react-icons/ri";
import { MdThumbsUpDown } from "react-icons/md";
import { AiFillTags } from "react-icons/ai";
import { ImTrophy } from "react-icons/im";
import IconDescListItem from "../components/SignUp/IconDescListItem";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import InputFeild from "../components/UI/InputFeild";
import { Link } from "react-router-dom";
import SocialLogin from "../components/UI/SocialLogin";

function SignUp() {
  return (
    <section className="flex items-center justify-center h-full">
      <div className="flex-none">
        <h1 className="text-3xl mb-10 mr-20">
          Join the Stack Overflow community
        </h1>
        <div className="text-left">
          <div className="mb-8">
            <IconDescListItem icon={<RiQuestionnaireFill />}>
              Get unstuck — ask a question
            </IconDescListItem>
            <IconDescListItem icon={<MdThumbsUpDown />}>
              Unlock new privileges like voting and commenting
            </IconDescListItem>
            <IconDescListItem icon={<AiFillTags />}>
              Save your favorite tags, filters, and jobs
            </IconDescListItem>
            <IconDescListItem icon={<ImTrophy />}>
              Earn reputation and badges
            </IconDescListItem>
          </div>
          <p className="text-sm">
            Collaborate and share knowledge with a private group for FREE.
            <br />
            <span className="text-blue-500">
              Get Stack Overflow for Teams free for up to 50 users.
            </span>
          </p>
        </div>
      </div>
      <div className="w-80">
        <div className="mb-4">
          <SocialLogin />
        </div>
        <Card className="mt-4 mb-10">
          <form>
            <div>
              <InputFeild label="Display name" className="mt-0" />
              <InputFeild label="Email" />
              <InputFeild label="Password" />
            </div>
            <div className="mb-4 text-left">
              <p className="my-2 text-sm text-gray-500">
                Passwords must contain at least eight characters, including at
                least 1 letter and 1 number.
              </p>

              <p className="my-2 text-sm text-gray-500">
                <input type="checkbox" id="checkAgree" />
                <label htmlFor="checkAgree" className="ml-2">
                  Opt-in to receive occasional product updates, user research
                  invitations, company announcements, and digests.
                </label>
              </p>
            </div>
            <Button variant="primary" size="md" block>
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
        <div className="text-sm">
          <p className="my-1">
            <span className="mr-2">Already have an account?</span>
            <Link to="/" className="text-blue-500">
              Log in
            </Link>
          </p>
          <p className="my-1">
            <span className="mr-2">Are you an employer?</span>
            <Link to="/" className="text-blue-500">
              Sign up on Talent
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
