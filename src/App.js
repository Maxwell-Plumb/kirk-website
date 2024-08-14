import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConnectButton from './components/ConnectButton'
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Residential = lazy(() => import('./pages/Residential'));
const CommercialHVAC = lazy(() => import('./pages/CommercialHVAC'));
const CommercialPlumbing = lazy(() => import('./pages/CommercialPlumbing'));
const FireSprinklers = lazy(() => import('./pages/FireSprinklers'));
const GasLines = lazy(() => import('./pages/GasLines'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Custom loading component
const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="bg-black min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/services/residential' element={<Residential />} />
              <Route path='/services/commercial-hvac/:tab?' element={<CommercialHVAC />} />
              <Route path='/services/commercial-plumbing/:tab?' element={<CommercialPlumbing />} />
              <Route path='/services/fire-sprinklers' element={<FireSprinklers />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/services/gas-lines' element={<GasLines />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;