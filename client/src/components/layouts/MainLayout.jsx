import classNames from "classnames";
import React from "react";
import { Outlet } from "react-router-dom";
import AsideLeft from "./AsideLeft/AsideLeft";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

function MainLayout({ hasSidebar }) {
  return (
    <main>
      <Header />
      <div className="container grid grid-cols-[200px_minmax(900px,_1fr)] min-h-screen ">
        <div className="relative">
          <AsideLeft />
        </div>
        <div className="border-l py-6">
          <div
            className={classNames("grid h-full", {
              "grid-cols-[minmax(calc(100%-14rem),_1fr)_14rem]": hasSidebar,
            })}
          >
            <Outlet />
            {hasSidebar && <Sidebar />}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default MainLayout;
