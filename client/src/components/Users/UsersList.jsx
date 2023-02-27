import Pagination from '../UI/Pagination';
import UsersListCategory from './UsersListCategory';
import UsersListItem from './UsersListItem';

function UsersList({ users, page, onClickPagination }) {
  const handleClickPage = pageNum => {
    onClickPagination(pageNum);
  };

  return (
    <section className="my-6">
      <UsersListCategory />
      <ul className="text-left grid grid-cols-4 gap-2">
        {users.map(user => (
          <UsersListItem user={user} key={user.memberId} />
        ))}
      </ul>
      {/* <div className="text-right">
        <Pagination
          total={users.length}
          page={page}
          onClick={handleClickPage}
        />
      </div> */}
    </section>
  );
}

export default UsersList;
