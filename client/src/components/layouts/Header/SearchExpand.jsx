import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';

function SearchExpandKeyword({ keyword, children }) {
  return (
    <div className="mt-2 first:mt-0">
      <span className="font-semibold">{keyword}</span>
      <span className="text-gray-500 ml-2">{children}</span>
    </div>
  );
}

function SearchExpand({ isExpanded }) {
  return (
    <div className="absolute top-12 bg-white border  w-full shadow-md">
      <div className="flex p-3 text-left text-sm">
        <div className="flex-1">
          <SearchExpandKeyword keyword="[tag]">
            search within a tag
          </SearchExpandKeyword>
          <SearchExpandKeyword keyword="user:1234">
            search by author
          </SearchExpandKeyword>
          <SearchExpandKeyword keyword='"words here"'>
            exact phrase
          </SearchExpandKeyword>
          <SearchExpandKeyword keyword='collective:"Name"'>
            collective content
          </SearchExpandKeyword>
        </div>
        <div className="flex-1">
          <SearchExpandKeyword keyword="answers:0">
            unanswered questions
          </SearchExpandKeyword>
          <SearchExpandKeyword keyword="score:3">
            posts with a 3+ score
          </SearchExpandKeyword>
          <SearchExpandKeyword keyword="is:question">
            type of post
          </SearchExpandKeyword>
          <SearchExpandKeyword keyword="isaccepted:yes">
            ssearch within status
          </SearchExpandKeyword>
        </div>
      </div>
      <div
        className="border-t border-t-gray-300 text-left p-3 flex justify-between items-end"
        aria-expanded={isExpanded}
      >
        <Button to="/questions" variant="secondary" size="sm">
          Ask a question
        </Button>
        <Link to="/" className="text-link text-sm">
          Search help
        </Link>
      </div>
    </div>
  );
}

export default SearchExpand;
