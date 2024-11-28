import React from 'react'
import { Outlet } from 'react-router-dom' 
import Header from './header'
import CartTab from './cartTab' 
import { useSelector } from 'react-redux'

// const Layout = () => {
//     const statusTabCart = useSelector(store => store.cart.statusTab);

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const Component = ({ statusTabCart }) => {
    return (
        <div className="bg-zinc-200 w-[900px]">
            <main
                className={twMerge(
                    clsx(
                        'w-[900px] max-w-full m-auto p-5 transform transition-transform duration-500',
                        {
                            '-translate-x-56': statusTabCart
                        }
                    )
                )}
            >
                <Header />
                <Outlet />
            </main>
            <CartTab />
        </div>
    );
}

export default Layout
