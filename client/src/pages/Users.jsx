import UsersHeader from "../components/Users/UsersHeader";
import UsersList from "../components/Users/UsersList";
import UsersPagination from "../components/Users/UsersPagination";

function Users() {
    return (
        <section className="mx-8 my-8">
            <UsersHeader />
            <UsersList />
            <UsersPagination />
        </section>
    );
}

export default Users;
