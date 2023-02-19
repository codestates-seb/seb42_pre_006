function QuestionAskEditTitle() {
    return (
        <section className="px-8 pt-8 pb-4 mx-8">
            <h2 className="font-semibold">Title</h2>
            {/* TODO: 질문 수정기능 작업 -> 작성된 본문 내용 가져오기 */}
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
