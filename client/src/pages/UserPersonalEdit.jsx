import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UsersPersonalPageHeader from '../components/UsersPersonalPage/UsersPersonalPageHeader';
import UsersPersonalEditForm from '../components/UsersPersonalPage/UsersPersonalEditForm';

function UserPersonalEdit() {
  const params = useParams();
  const [user, setUser] = useState(null);

  const handleGetUserInfo = async () => {
    try {
      const response = await axios.get(`/api/v1/members/${params.id}`);
      if (response) {
        setUser(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetUserInfo();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {user && (
        <article className="ml-6">
          <UsersPersonalPageHeader user={user} />
          <UsersPersonalEditForm user={user} />
        </article>
      )}
    </>
  );
}

export default UserPersonalEdit;
