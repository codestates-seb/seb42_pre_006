import UsersHeader from '../components/Users/UsersHeader';
import UsersList from '../components/Users/UsersList';
import UsersPagination from '../components/Users/UsersPagination';

function Users() {
  return (
    <article className="ml-6">
      <UsersHeader />
      <UsersList />
      <UsersPagination />
    </article>
  );
}

export default Users;
