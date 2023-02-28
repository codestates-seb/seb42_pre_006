import { FaPen } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Button from '../UI/Button';

function UsersPersonalPageHeaderButton() {
  const params = useParams();
  return (
    <section className="absolute right-4 top-0">
      <div className="flex">
        <Button
          variant="default"
          to={`/users/${params.id}/edit`}
          icon={<FaPen className="text-gray-500" />}
        >
          <span className="text-xs">Edit profile</span>
        </Button>
      </div>
    </section>
  );
}

export default UsersPersonalPageHeaderButton;
