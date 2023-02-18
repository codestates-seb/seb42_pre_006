import UsersPersonalPageList from "../components/UsersPersonalPage/UsersPersonalPageList";
import UsersPersonalPageHeader from "../components/UsersPersonalPage/UsersPersonalPageHeader";
import UsersPersonalPageNav from "../components/UsersPersonalPage/UsersPersonalPageNav";
import UsersPersonalPageSummary from "../components/UsersPersonalPage/UsersPersonalPageSummary";
import UsersPersonalPageAnswers from "../components/UsersPersonalPage/UsersPersonalPageAnswers";
import UsersPersonalPageQuestions from "../components/UsersPersonalPage/UsersPersonalPageQuestions";

function UsersPersonalPage() {
    return (
        <section className="w-auto mt-4 ml-4">
            <UsersPersonalPageHeader />
            <UsersPersonalPageList />
            <div className="flex justify-between">
                <UsersPersonalPageNav />
                <div className="w-full">
                    <UsersPersonalPageSummary />
                    <div className="w-full flex justify-between">
                        <UsersPersonalPageAnswers />
                        <UsersPersonalPageQuestions />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UsersPersonalPage;
