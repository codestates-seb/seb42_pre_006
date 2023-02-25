import React from 'react';
import Badge from '../../UI/Badge';

function QuestionBodyTags({ tags }) {
  return (
    <>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Badge variant="tags" key={tag.tagId} to={`/tags/${tag.tagName}`}>
              {tag.tagName}
            </Badge>
          ))}
        </div>
      )}
    </>
  );
}

export default React.memo(QuestionBodyTags);
