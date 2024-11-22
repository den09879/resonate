
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Home } from './pages';
import { AnimatePresence } from 'framer-motion';
const App = () => {

  return (
    <main className='h-[100vh]'>
        <Router>
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </AnimatePresence>
        </Router>
    </main>
    
  )
}

export default App