function QuestionEditFormTags() {
  return (
    <section className="px-8 mx-8 my-">
      <h2 className="font-semibold">Tags</h2>
      {/* TODO: 태그 수정작업 -> 본문 태그 불러오기, 추가/삭제 기능구현 */}
      <input
        className="w-full border rounded px-2 py-2 text-sm focus:border focus:border-[#58A4DE] outline-offset-4 outline-[#DDEAF7]"
        type="text"
        placeholder="e.g. (wpf ios jquery)"
      />
    </section>
  );
}

export default QuestionEditFormTags;
