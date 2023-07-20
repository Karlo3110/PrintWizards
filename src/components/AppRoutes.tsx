import Home from 'pages/Home'
import { Routes, Route } from 'react-router-dom'
import NotFound from 'pages/NotFound'
import Contact from 'pages/Contact'
import Projects from 'pages/Projects'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default AppRoutes
