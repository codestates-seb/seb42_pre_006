function UsersListCategory() {
  return (
    <section>
      {/* TODO: 페이지네이션 기능작업 */}
      <ul className="my-6 flex justify-end text-xs">
        <li className="px-2 pb-1.5 font-semibold border-b border-[#F48224] text-[#3b4045]">
          week
        </li>
        <li className="px-2 pb-1.5 text-[#6a737c]">month</li>
        <li className="px-2 pb-1.5 text-[#6a737c]">quarter</li>
        <li className="px-2 pb-1.5 text-[#6a737c]">year</li>
        <li className="px-2 pb-1.5 text-[#6a737c]">all</li>
      </ul>
    </section>
  );
}

export default UsersListCategory;
