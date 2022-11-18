import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Header />

          <main className='container mb-auto mx-auto px-3 pb-1 text-white'>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
