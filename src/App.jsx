import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import RemovePage from './pages/RemovePage'
import UpscalerPage from './pages/UpscalerPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
    <Router>
      <Routes>
       <Route path="/" element={<LandingPage />} />
       <Route path="/removebg" element={<RemovePage />} />
       <Route path="/upscaler" element={<UpscalerPage />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
