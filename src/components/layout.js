import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import CartTab from './cartTab';
import { useSelector } from 'react-redux';

const Layout = () => {
  const statusTabCart = useSelector((store) => store.cart.statusTab);

  return (
    <div className="bg-zinc-200 min-h-screen">
      {/* Main content */}
      <main
        className={`max-w-[900px] w-full m-auto p-5 transform transition-transform duration-500 
        ${statusTabCart === false ? '' : '-translate-x-56'} 
        sm:px-3 md:px-4 lg:px-5`}
      >
        <Header />
        <Outlet />
      </main>

      {/* Cart Tab */}
      <CartTab />
    </div>
  );
};

export default Layout;
