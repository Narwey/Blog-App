import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './app.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Blog from './pages/Blog'

function App() {

  return (
    <Router>
      <div className='font-openSans'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
