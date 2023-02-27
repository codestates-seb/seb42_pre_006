import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {user && (
        <article className="ml-6">
          <UsersPersonalPageHeader user={user} />
          <div className="text-left my-10">
            <h3 className="text-2xl font-medium mb-4">About Me</h3>
            {user.aboutMe ? (
              <div className="border rounded-md p-4">
                <div
                  className="my-2"
                  dangerouslySetInnerHTML={{ __html: user.aboutMe }}
                />
              </div>
            ) : (
              <div className="border rounded-md p-8 text-center bg-gray-100">
                <p className="text-sm text-gray-500">
                  Your about me section is currently blank.Would you <br />
                  like to add one?
                  <Link
                    to={`/users/${user.memberId}/edit`}
                    className="text-link ml-2"
                  >
                    Edit profile
                  </Link>
                </p>
              </div>
            )}
          </div>
          <div className="text-left my-10">
            <h3 className="text-2xl font-medium mb-4">Tags</h3>
            {/** 태그 출력으로 활용해보기 */}
            {user.memberTitle ? (
              <div className="border rounded-md">
                {user.memberTitle?.split(' ').map((item, index) => (
                  <div key={index} className="border-t first:border-0 p-4">
                    <Badge variant="tags">{item}</Badge>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border rounded-md p-8 text-center bg-gray-100">
                <p className="text-sm text-gray-500">
                  You have not cast any Tgas
                </p>
              </div>
            )}
          </div>
        </article>
      )}
    </>
  );
}

export default UsersPersonalDetail;
