import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import CartTab from './cartTab';
import { useSelector } from 'react-redux';
import { cn } from '../utils/classnames';
// import { cn } from './utils/classnames'; // adjust the import path accordingly

const Layout = () => {
  const statusTabCart = useSelector((store) => store.cart.statusTab);
  return (
    <div className="bg-zinc-200 w-[900px]">
      <main
        className={cn(
          'w-[900px] max-w-full m-auto p-5 transform transition-transform duration-500',
          statusTabCart && '-translate-x-56' // conditionally add class
        )}
      >
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
};

export default Layout;

// const Layout = () => {
//     const statusTabCart = useSelector(store => store.cart.statusTab);
