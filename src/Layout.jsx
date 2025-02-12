import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

function Layout() {
    return (
        <div>
            <Header/>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;