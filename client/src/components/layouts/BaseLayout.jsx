import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

function BaseLayout({ children }) {
  return (
    <main className="bg-gray-100">
      <Header />
      <div className="container grid min-h-[calc(100vh-4rem)] py-6">
        <article className="h-full">
          <Outlet />
        </article>
      </div>
    </main>
  );
}

export default BaseLayout;
