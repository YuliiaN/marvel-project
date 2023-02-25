import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from 'routes';
import { HomeLayout } from 'layout/Layout/HomeLayout';
import { ComicsLayout } from 'layout/Layout/ComicsLayout';
import Home from 'views/Home';
import { lazy, Suspense } from 'react';

const Comics = lazy(() => import('../views/Comics/Comics'));
const ComicsDetails = lazy(() =>
  import('../views/ComicsDetails/ComicsDetails')
);

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path={routes.HOME} element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path={routes.COMICS} element={<ComicsLayout />}>
          <Route index element={<Comics />} />
          <Route path={routes.COMICS_ID} element={<ComicsDetails />} />
        </Route>
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Routes>
    </Suspense>
  );
};

export default App;
