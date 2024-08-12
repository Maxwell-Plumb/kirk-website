import Navbar from './components/Navbar'
import ConnectNowModal from './components/ConnectModal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Residential from './pages/Residential'
import CommercialHVAC from './pages/CommercialHVAC'
import CommercialPlumbing from './pages/CommercialPlumbing'
import FireSprinklers from './pages/FireSprinklers'
import GasLines from './pages/GasLines'

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
            <Route path='/services/gas-lines' element={<GasLines />} />
          </Routes>
        </Router>
        <ConnectNowModal />
      </main>
    </div>
  );
};

export default App;