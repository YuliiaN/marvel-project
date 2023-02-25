import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from 'routes';
import { Layout } from 'layout/Layout/Layout';
import Home from 'views/Home';
import Comics from 'views/Comics';
import ComicsDetails from 'views/ComicsDetails';

const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.COMICS} element={<Comics />} />
        <Route path={routes.COMICS_ID} element={<ComicsDetails />} />
      </Route>
      {/* <Route path={routes.CHARACTER_ID} />
      <Route path={routes.COMICS} /> */}
      {/* <Route path="*" element={<Navigate to={routes.HOME} />} /> */}
    </Routes>
  );
};

export default App;
