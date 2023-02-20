function QuestionEditAside() {
  return (
    <section>
      <div className="mt-8 mr-16 border border-[rgb(228,220,193)] shadow-md">
        <h4 className="bg-[#FBF3D5] px-4 py-4 border-b border-[rgb(228,220,193)]">
          How to Edit
        </h4>
        <ul className="bg-[#FDF7E2] list-disc px-8 py-4">
          <li className="mb-2 text-sm">Correct minor typos or mistakes</li>
          <li className="mb-2 text-sm">Clarify meaning without changing it</li>
          <li className="mb-2 text-sm">Add related resources or links</li>
          <li className="mb-2 text-sm">
            <em>Always</em> respect the author's intent
          </li>
          <li className="mb-2 text-sm">
            Don't use edits to reply to the author
          </li>
        </ul>
      </div>
    </section>
  );
}

export default QuestionEditAside;
