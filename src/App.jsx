import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home.jsx'
import Layout from './components/Layout/Layout.jsx'
import Login from './components/Auth/Login.jsx'
import Signup from './components/Auth/Signup.jsx'
import ResetPassword from './components/Auth/ResetPassword.jsx'
import Dashboard from './pages/Dashboard.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import ProtectedRoute from './components/Auth/ProtectedRoute.jsx'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/reset-password' element={<ResetPassword />} />
              <Route path='/dashboard' element={<ProtectedRoute />}>
                <Route path='' element={<Dashboard />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
     
    </AuthProvider>
  )
}

export default App
