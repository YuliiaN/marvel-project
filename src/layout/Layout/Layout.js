import { Outlet } from 'react-router-dom';
import Header from 'layout/Header.js/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
