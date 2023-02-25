import { Outlet } from 'react-router-dom';
import Header from 'layout/Header.js/Header';
import Banner from 'views/Comics/Banner';

export const ComicsLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Outlet />
      </main>
    </>
  );
};
