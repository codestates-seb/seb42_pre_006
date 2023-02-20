import TagsHeader from '../components/Tags/TagsHeader';
import TagsList from '../components/Tags/TagsList';
import TagsPagination from '../components/Tags/TagsPagination';

function Tags() {
  return (
    <article className="mx-8 my-8">
      <TagsHeader />
      <TagsList />
      <TagsPagination />
    </article>
  );
}

export default Tags;
