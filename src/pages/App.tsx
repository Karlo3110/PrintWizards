import { BrowserRouter as Router } from 'react-router-dom'
import '../index.css'
import AppRoutes from 'components/AppRoutes.tsx'
import Navbar from 'components/Navbar.tsx'
import Footer from 'components/Footer.tsx'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
