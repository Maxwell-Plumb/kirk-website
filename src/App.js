import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ConnectButton from './components/ConnectButton';
import './App.css'

const Home = lazy(() => import('./pages/Home'))
const Residential = lazy(() => import('./pages/Residential'))
const CommercialHVAC = lazy(() => import('./pages/CommercialHVAC'))
const CommercialPlumbing = lazy(() => import('./pages/CommercialPlumbing'))
const FireSprinklers = lazy(() => import('./pages/FireSprinklers'))
const GasLines = lazy(() => import('./pages/GasLines'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="container mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services/residential' element={<Residential />} />
            <Route path='/services/commercial-hvac/:tab?' element={<CommercialHVAC />} />
            <Route path='/services/commercial-plumbing/:tab?' element={<CommercialPlumbing />} />
            <Route path='/services/fire-sprinklers' element={<FireSprinklers />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/services/gas-lines' element={<GasLines />} />
          </Routes>
          <ConnectButton />
        </Router>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;