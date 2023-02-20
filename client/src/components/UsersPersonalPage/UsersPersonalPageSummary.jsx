import { RiBubbleChartFill } from 'react-icons/ri';
import Button from '../UI/Button';

function UsersPersonalPageSummary() {
  return (
    <section>
      <h2 className="text-left text-xl font-normal mb-2">Summary</h2>
      <ul className="flex justify-between mb-2">
        <li className="grid gap-2 border rounded p-6 mr-3">
          <RiBubbleChartFill className="m-auto text-5xl" />
          <p className="text-sm font-medium">
            Reputation is how the community thanks you
          </p>
          <p className="text-xs mb-6">
            When users upvote your helpful posts, you&apos;ll earn reputation
            and unlock new privileges.
          </p>
          <p className="text-xs font-medium">
            Learn more about <u>reputation</u> and <u>privileges</u>
          </p>
        </li>
        <li className="grid gap-2 border rounded p-6 mr-3">
          <RiBubbleChartFill className="m-auto text-5xl" />
          <p className="text-sm font-medium">Earn badges for helpful actions</p>
          <p className="text-xs mb-6">
            Badges are bits of digital flair that you get when you participate
            in especially helpful ways.
          </p>
          <Button variant="primary" size="lg">
            Take the Tour and earn your first badge
          </Button>
        </li>
        <li className="grid gap-2 border rounded p-6 mr-3">
          <RiBubbleChartFill className="m-auto text-5xl" />
          <p className="text-sm font-medium">Measure your impact</p>
          <p className="text-xs mb-6">
            When users upvote your helpful posts, you&apos;ll earn reputation
            and unlock new privileges.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default UsersPersonalPageSummary;
