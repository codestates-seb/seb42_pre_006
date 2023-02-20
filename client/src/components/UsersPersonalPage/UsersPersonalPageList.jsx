function UsersPersonalPageList() {
  return (
    <section>
      <ul className="flex items-center text-xs py-4">
        <li className="px-3 py-2">Profile</li>
        <li className="px-3 py-2 rounded-2xl bg-[#F48224] text-white">
          Activity
        </li>
        <li className="px-3 py-2">Saves</li>
        <li className="px-3 py-2">Settings</li>
      </ul>
    </section>
  );
}

export default UsersPersonalPageList;
