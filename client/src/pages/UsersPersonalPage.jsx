import UsersPersonalPageList from "../components/UsersPersonalPageList";
import UsersPersonalPageHeader from "../components/UsersPersonalPageHeader";
import UsersPersonalPageNav from "../components/UsersPersonalPageNav";
import UsersPersonalPageSummary from "../components/UsersPersonalPageSummary";
import UsersPersonalPageAnswers from "../components/UsersPersonalPageAnswers";
import UsersPersonalPageQuestions from "../components/UsersPersonalPageQuestions";

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
