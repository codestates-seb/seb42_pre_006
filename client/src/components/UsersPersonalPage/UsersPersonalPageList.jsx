import Button from '../UI/Button';

function UsersPersonalPageList() {
  return (
    <section>
      <ul className="flex items-center text-xs py-4">
        <li>
          <Button size="sm" className="border-0 bg-white">
            Profile
          </Button>
        </li>
        <li>
          <Button variant="orange" size="sm" rounded>
            Activity
          </Button>
        </li>
        <li>
          <Button size="sm" className="border-0 bg-white">
            Saves
          </Button>
        </li>
        <li>
          <Button size="sm" className="border-0 bg-white">
            Settings
          </Button>
        </li>
      </ul>
    </section>
  );
}

export default UsersPersonalPageList;
