import { FaPen } from "react-icons/fa";
import { BsFillChatRightTextFill } from "react-icons/bs";

function UsersPersonalPageHeaderButton() {
    return (
        <section className="absolute right-4 top-0">
            <div className="flex">
                <button
                    type="button"
                    className="flex justify-center items-center border rounded p-2 mr-2 border-[#999]"
                >
                    <FaPen className="mr-2" />
                    <span className="text-xs">Edit profile</span>
                </button>
                <button
                    type="button"
                    className="flex justify-center items-center border rounded p-2 border-[#999]"
                >
                    <BsFillChatRightTextFill className="mr-2" />
                    <span className="text-xs">Network profile</span>
                </button>
            </div>
        </section>
    );
}

export default UsersPersonalPageHeaderButton;
