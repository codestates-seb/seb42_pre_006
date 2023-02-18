function UsersPersonalPageAnswers() {
    return (
        <section className="w-full">
            {/* TODO: [Answers] 리스트 작업 -> 내가 작성한 답변 데이터 받아오기 */}
            <div className="mt-4 mr-3">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-medium">Answers</h2>
                    <div className=" border border-[#6a737c] rounded text-xs">
                        <button
                            type="button"
                            className="bg-[#e3e6e8] text-[#3b4045] py-2 px-2  rounded-l border-r border-[#6a737c]"
                        >
                            Score
                        </button>
                        <button
                            type="button"
                            className="text-[#6a737c] py-2 px-2 border-r border-[#6a737c]  hover:bg-[#edeff1]"
                        >
                            Activity
                        </button>
                        <button
                            type="button"
                            className="text-[#6a737c] py-2 px-2 border-[#6a737c] hover:bg-[#edeff1]"
                        >
                            Newest
                        </button>
                    </div>
                </div>

                <ul className="w-full mt-1">
                    <li className="border rounded py-5 px-10">
                        You have not{" "}
                        <span className="text-blue-600">answered</span> any
                        questions
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default UsersPersonalPageAnswers;
