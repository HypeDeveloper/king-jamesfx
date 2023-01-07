import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './pages/components/Navbar'
import {Home} from './pages/Home'

import './styles/index.css'
import './styles/components.css'
import './styles/home.css'
import './styles/dashboard.css'
import './styles/Admin.css'
import About from './pages/About'
import { SignIn, SignUp } from './pages/account'
import { AuthContextProvider } from './auth/authContext'
import { DashPackage,DashTrans, Dashboard, Index } from './pages/Dashboard'
import { AdminIndex, AdminTrans, DashboardAdmin } from './pages/Admin'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='signIn' element={<SignIn />} />
          <Route path='signUp' element={<SignUp />} />
        </Route>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route index element={<Index />} />
            <Route path='package' element={<DashPackage />} />
            <Route path='transfers' element={<DashTrans />} />
        </Route>
          <Route path='/admin' element={<DashboardAdmin />}>
            <Route index element={<AdminIndex />} />
            <Route path='transfers' element={<AdminTrans />} />
          </Route>
      </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

function App() {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  )
}

/*

--/
-----[NavBar]
-----Home
-----About
--/dashboard
---
*/