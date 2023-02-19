import { BsSearch } from "react-icons/bs";
function Search() {
    return (
        <section>
            <div className="m-2 relative">
                {/* TODO: 검색 상세기능 설명창 구현 -> 검색 인풋 클릭 시 상세 이용 설명창 구현하기 */}
                <BsSearch className="absolute left-0 top-2 text-gray-500 text-lg mx-3" />
                <input
                    className="w-full border rounded px-2 py-2 text-sm focus:border focus:border-[#58A4DE] outline-offset-4 outline-[#DDEAF7] pl-10"
                    type="text"
                    placeholder="Search..."
                />
            </div>
        </section>
    );
}

export default Search;
