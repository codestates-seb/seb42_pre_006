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
        console.log(data.data);
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
        <ul className="grid grid-cols-4 items-center text-left gap-3">
          {tags?.map(tag => (
            <li className="" key={tag.tagId}>
              <div className=" border text-sm p-4">
                <span className="rounded bg-[#E1ECF4] py-1 px-2 text-blue-900">
                  {tag.tagName}
                </span>
                <p className="mt-5 line-clamp-4">
                  For questions about programming in ECMAScript (JavaScript/JS)
                  and its different dialects/implementations (except for
                  ActionScript). Keep in mind that JavaScript is NOT the same as
                  Java! Include all labels that are relevant to your question;
                  e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular],
                  [ember.js], [vue.js], [typescript], [svelte], etc.
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default TagsList;
