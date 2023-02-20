import UsersPersonalPageList from '../components/UsersPersonalPage/UsersPersonalPageList';
import UsersPersonalPageHeader from '../components/UsersPersonalPage/UsersPersonalPageHeader';
import UsersPersonalPageNav from '../components/UsersPersonalPage/UsersPersonalPageNav';
import UsersPersonalPageSummary from '../components/UsersPersonalPage/UsersPersonalPageSummary';
import UsersPersonalPageAnswers from '../components/UsersPersonalPage/UsersPersonalPageAnswers';
import UsersPersonalPageQuestions from '../components/UsersPersonalPage/UsersPersonalPageQuestions';

function UsersPersonalPage() {
  return (
    <article className="ml-6">
      <UsersPersonalPageHeader />
      <UsersPersonalPageList />
      <div className="flex justify-between">
        <UsersPersonalPageNav />
        <div className="ml-6">
          <UsersPersonalPageSummary />
          <div className=" flex justify-between">
            <UsersPersonalPageAnswers />
            <UsersPersonalPageQuestions />
          </div>
        </div>
      </div>
    </article>
  );
}

export default UsersPersonalPage;
