import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

function BaseLayout() {
  return (
    <main className="bg-gray-100">
      <Header />
      <div className="container grid min-h-[calc(100vh-4rem)] py-6">
        <Outlet />
      </div>
    </main>
  );
}

export default BaseLayout;
