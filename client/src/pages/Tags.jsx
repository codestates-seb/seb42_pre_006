import TagsHeader from "../components/Tags/TagsHeader";
import TagsList from "../components/Tags/TagsList";
import TagsPagination from "../components/Tags/TagsPagination";

function Tags() {
    return (
        <section className="mx-8 my-8">
            <TagsHeader />
            <TagsList />
            <TagsPagination />
        </section>
    );
}

export default Tags;
