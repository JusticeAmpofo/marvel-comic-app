import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Character from './pages/Character'
import { CharacterProvider } from './context/characters/CharacterContext'

function App() {
  return (
    <CharacterProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Header />

          <main className='container mb-auto mx-auto px-3 pb-1 text-white'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='characters/:characterId' element={<Character />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CharacterProvider>
  )
}

export default App
