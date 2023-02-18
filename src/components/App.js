// import { useState } from 'react';

import Header from './Header.js/Header';
import Hero from './Hero/Hero';
import CharContent from './CharContent/CharContent';
// import Loader from './Loader/Loader';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CharContent />
        {/* <Loader loading={loading} /> */}
      </main>
    </>
  );
};

export default App;
