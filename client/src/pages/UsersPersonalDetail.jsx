import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UsersPersonalPageHeader from '../components/UsersPersonalPage/UsersPersonalPageHeader';
import Badge from '../components/UI/Badge';

function UsersPersonalDetail() {
  const params = useParams();
  const [user, setUser] = useState(null);

  const handleSubmitSignUp = async () => {
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
    handleSubmitSignUp();
  }, []);

  return (
    <>
      {user && (
        <article className="ml-6">
          <UsersPersonalPageHeader user={user} />
          <div className="text-left my-10">
            <h3 className="text-2xl font-medium mb-4">About Me</h3>
            <div className="border rounded-md p-4">
              <div
                className="my-2"
                dangerouslySetInnerHTML={{ __html: user.aboutMe }}
              />
            </div>
          </div>
          <div className="text-left my-10">
            <h3 className="text-2xl font-medium mb-4">Tags</h3>
            <div className="border rounded-md">
              {user.memberTitle.split(',').map((item, index) => (
                <div key={index} className="border-t first:border-0 p-4">
                  <Badge variant="tags">{item}</Badge>
                </div>
              ))}
            </div>
          </div>
        </article>
      )}
    </>
  );
}

export default UsersPersonalDetail;
