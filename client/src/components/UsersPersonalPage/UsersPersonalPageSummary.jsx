function UsersPersonalPageSummary() {
  return (
    <section>
      <h2 className="text-xl font-medium">Summary</h2>
      <ul className="flex justify-between mt-1">
        <li className="w-full border rounded py-10 px-5 mr-3">
          Reputation is how the community thanks you
        </li>
        <li className="w-full border rounded py-10 px-5 mr-3">
          Earn badges for helpful actions
        </li>
        <li className="w-full border rounded py-10 px-5 mr-3">
          Measure your impact
        </li>
      </ul>
    </section>
  );
}

export default UsersPersonalPageSummary;
