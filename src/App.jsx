import { BrowserRouter, Route, Routes } from 'react-router'
import { Landing, Error, Dashboard, Register } from './pages'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="register" element={<Register />} />

        <Route path="/" element={<Landing />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
