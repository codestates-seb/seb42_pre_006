import React from 'react';
import { Link } from 'react-router-dom';
import { RiQuestionnaireFill } from 'react-icons/ri';
import { MdThumbsUpDown } from 'react-icons/md';
import { AiFillTags } from 'react-icons/ai';
import { ImTrophy } from 'react-icons/im';
import IconDescListItem from '../components/SignUp/IconDescListItem';
import SocialLogin from '../components/UI/SocialLogin';
import SignUpForm from '../components/SignUp/SignUpForm';

function SignUp() {
  return (
    <article>
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
          <SignUpForm />
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
    </article>
  );
}

export default SignUp;
