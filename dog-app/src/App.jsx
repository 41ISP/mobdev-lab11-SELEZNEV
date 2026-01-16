import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ImagePage from './pages/ImagePage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/image/:url" element={<ImagePage />} />
    </Routes>
  )
}

export default App
