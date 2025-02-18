import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Info, Kontakt, Praktyka, Hero, Navbar, StarsCanvas, Tech, Portfolio } from './components';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Info />
        <Praktyka />
        <Tech />
        <Portfolio />
        <div className="relative z-0">
          <Kontakt />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
