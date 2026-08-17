import { Routes, Route } from 'react-router-dom'
import Site from './pages/Site'
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Routes>
        <Route path="/" element={<Site />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  )
}

export default App
