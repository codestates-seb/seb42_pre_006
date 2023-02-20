function QuestionAskFormTitle() {
  return (
    <section className="border rounded px-8 py-8 mx-8 my-8 bg-white">
      <h2 className="font-semibold">Title</h2>
      <p className="text-sm mb-2">
        Be specific and imagine you’re asking a question to another person.
      </p>
      <input
        className="w-full border rounded px-2 py-2 text-sm focus:border focus:border-[#58A4DE] outline-offset-4 outline-[#DDEAF7]"
        type="text"
        placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
        required
      />
    </section>
  );
}

export default QuestionAskFormTitle;
