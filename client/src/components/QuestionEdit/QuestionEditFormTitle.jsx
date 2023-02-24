function QuestionAskEditTitle() {
  return (
    <section className="px-8 py-3">
      <h2 className="font-semibold text-left">Title</h2>
      <input
        className="w-full border rounded px-2 py-2 text-sm focus:border focus:border-[#58A4DE] outline-offset-4 outline-[#DDEAF7]"
        type="text"
        placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
        required
      />
    </section>
  );
}

export default QuestionAskEditTitle;
