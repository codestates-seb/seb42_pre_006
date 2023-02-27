import axios from 'axios';
import { useEffect, useState } from 'react';

function TagsList() {
  const [tags, setTgas] = useState([]);

  const handleGetTags = async () => {
    try {
      const response = await axios.get('/tags');
      const { data } = response;
      if (data) {
        setTgas(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetTags();
  }, []);

  return (
    <section className="mt-4">
      {tags && (
        <ul className="grid grid-cols-4 items-stretch text-left gap-3">
          {tags?.map(tag => (
            <li className="" key={tag.tagId}>
              <div className=" border text-sm p-4 h-full min-h-[10rem]">
                <span className="rounded bg-[#E1ECF4] py-1 px-2 text-blue-900">
                  {tag.tagName}
                </span>
                {tag.tagInfo && tag.tagInfo.length > 0 && (
                  <p className="mt-5 line-clamp-4">{tag.tagInfo}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default TagsList;
