function QuestionsList() {
    return (
        <section>
            {/* TODO: 질문리스트 데이터 랜더링기능 작업 -> 더미 데이터 실시간 업데이트 */}
            <ul className="border-t">
                <li className="border-b py-6 px-8 bg-[#FDF7E2] relative">
                    <div className="text-xs mb-2">
                        <span className="mr-2 font-medium">0 votes</span>
                        <span className="mr-2">0 answers</span>
                        <span>2 views</span>
                    </div>

                    <h4 className="text-lg text-[#0063bf] font-medium cursor-pointer hover:text-[#0A95FF]">
                        PostgreSQL migration from id(bigint) to id(uuid) while
                        preserving relations
                    </h4>
                    <p className="text-sm truncate">
                        Now I somehow need to preserve relations, so for
                        example, if I have a table users that has person_id
                        (bigint) column, this should get migrated to person_id
                        (uuid) and maintain the relationship. How can I do this
                        without losing any data?
                    </p>

                    <div className="mt-2">
                        <button
                            type="button"
                            className="mr-2 text-sm text-[#39739d] bg-[#E1ECF4] px-2 py-1 rounded hover:bg-[#cfdbe5]"
                        >
                            tag1
                        </button>
                        <button
                            type="button"
                            className="mr-2 text-sm text-[#39739d] bg-[#E1ECF4] px-2 py-1 rounded hover:bg-[#cfdbe5]"
                        >
                            tag2
                        </button>
                        <button
                            type="button"
                            className="text-sm text-[#39739d] bg-[#E1ECF4] px-2 py-1 rounded hover:bg-[#cfdbe5]"
                        >
                            tag3
                        </button>
                    </div>

                    <div className="absolute right-8 bottom-8">
                        <img
                            className="w-4 h-4 inline mr-1"
                            src="https://www.nicepng.com/png/detail/31-315310_react-hexagon-react-js-transparent-background.png"
                            alt="user_image"
                        />
                        <span className="text-xs">
                            Kim Coding <strong>20</strong> asked 1 min ago
                        </span>
                    </div>
                </li>

                <li className="border-b py-6 px-8 relative">
                    <div className="text-xs mb-2">
                        <span className="mr-2 font-medium">2 votes</span>
                        <span className="mr-2">1 answers</span>
                        <span>10 views</span>
                    </div>

                    <h4 className="text-lg text-[#0063bf] font-medium cursor-pointer hover:text-[#0A95FF]">
                        Azure Python Function - Writing a video file to tmp
                        folder is saving file with zero bytes
                    </h4>
                    <p className="text-sm truncate">
                        I have an Azure python function that loads the video
                        from Azure blob storage, and saves it locally in tmp
                        folder. In local environment everything works correctly.
                        But when I deploy this code to Azure Function, the file
                        is created but no information is written to it. The file
                        size is 0.
                    </p>

                    <div className="mt-2">
                        <button
                            type="button"
                            className="mr-2 text-sm text-[#39739d] bg-[#E1ECF4] px-2 py-1 rounded hover:bg-[#cfdbe5]"
                        >
                            tag1
                        </button>
                        <button
                            type="button"
                            className="mr-2 text-sm text-[#39739d] bg-[#E1ECF4] px-2 py-1 rounded hover:bg-[#cfdbe5]"
                        >
                            tag2
                        </button>
                        <button
                            type="button"
                            className="text-sm text-[#39739d] bg-[#E1ECF4] px-2 py-1 rounded hover:bg-[#cfdbe5]"
                        >
                            tag3
                        </button>
                    </div>

                    <div className="absolute right-8 bottom-8">
                        <img
                            className="w-4 h-4 inline mr-1"
                            src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-512x307-1v56l8ed.png"
                            alt="user_image"
                        />
                        <span className="text-xs">
                            Park Coffee <strong>450</strong> asked 1 min ago
                        </span>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default QuestionsList;
