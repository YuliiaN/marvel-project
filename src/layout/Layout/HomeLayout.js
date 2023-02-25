import { Outlet } from 'react-router-dom';
import Header from 'layout/Header.js/Header';

export const HomeLayout = () => {
  return (
    <>
      <Header />
      <main className="home-layout">
        <Outlet />
      </main>
    </>
  );
};
