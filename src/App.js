import Navbar from './components/Navbar'
import ConnectButton from './components/ConnectButton';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Residential from './pages/Residential'
import CommercialHVAC from './pages/CommercialHVAC'
import CommercialPlumbing from './pages/CommercialPlumbing'
import FireSprinklers from './pages/FireSprinklers'
import GasLines from './pages/GasLines'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <main className="container mx-auto">
        <Navbar />
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
        <Footer />
      </main>
    </div>
  );
};

export default App;