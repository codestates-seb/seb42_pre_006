function UsersPagination() {
    return (
        <section>
            {/* TODO: 페이지네이션 기능작업 */}
            <ul className="my-4 flex justify-end text-sm">
                <li className="border rounded mx-0.5 flex content-center justify-center hover:bg-[#D6D9DC]">
                    <button type="button" className="px-2 py-1">
                        Prev
                    </button>
                </li>
                <li className="border rounded mx-1 hover:bg-[#D6D9DC]">
                    <button type="button" className="px-2 py-1">
                        1
                    </button>
                </li>
                <li className="border rounded mx-1 bg-[#F48224] text-white font-medium border-[#F48224]">
                    <button type="button" className="px-2 py-1">
                        2
                    </button>
                </li>
                <li className="border rounded mx-1 hover:bg-[#D6D9DC]">
                    <button
                        type="button"
                        aria-current="page"
                        className="px-2 py-1"
                    >
                        3
                    </button>
                </li>
                <li className="border rounded mx-1 hover:bg-[#D6D9DC]">
                    <button type="button" className="px-2 py-1">
                        Next
                    </button>
                </li>
            </ul>
        </section>
    );
}

export default UsersPagination;
