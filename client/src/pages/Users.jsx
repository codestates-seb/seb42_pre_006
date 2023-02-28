import axios from 'axios';
import { useEffect, useState } from 'react';
import EmptyData from '../components/UI/EmptyData';
import UsersHeader from '../components/Users/UsersHeader';
import UsersList from '../components/Users/UsersList';

function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const handleGetUsers = async () => {
    try {
      const res = await axios.get('/api/v1/members');
      if (res) {
        setUsers(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickPage = pageNum => {
    setPage(pageNum);
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <article className="ml-6">
      <UsersHeader />
      {users.length ? (
        <UsersList
          users={users}
          page={page}
          onClickPagination={handleClickPage}
        />
      ) : (
        <EmptyData />
      )}
    </article>
  );
}

export default Users;
