import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from 'routes';
import { Layout } from 'layout/Layout/Layout';
import Home from 'views/Home';

const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      {/* <Route path={routes.CHARACTER_ID} />
      <Route path={routes.COMICS} /> */}
      {/* <Route path="*" element={<Navigate to={routes.HOME} />} /> */}
    </Routes>
  );
};

export default App;
