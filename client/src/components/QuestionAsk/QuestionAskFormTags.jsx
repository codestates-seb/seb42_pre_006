function QuestionAskFormTags() {
    return (
        <section className="border rounded px-8 py-8 mx-8 my-8 bg-white">
            <h2 className="font-semibold">Tags</h2>
            <p className="text-sm mb-2">
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
            </p>
            {/* TODO: 태그 기능작업 -> 태그추가,삭제 및 검색어로 태그종류찾기(드롭다운) */}
            <input
                className="w-full border rounded px-2 py-2 text-sm focus:border focus:border-[#58A4DE] outline-offset-4 outline-[#DDEAF7]"
                type="text"
                placeholder="e.g. (wpf ios jquery)"
            />
        </section>
    );
}

export default QuestionAskFormTags;
