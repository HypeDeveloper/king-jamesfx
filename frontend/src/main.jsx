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
    <SuspendService/>
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

function AppBase(){
  return(
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
  )
}

function SuspendService(){
  return( 
    <>
      <div className="suspend">
        <h1 className='Title aSub'>
          Dear User,
        </h1>
        <h3 className='Subtext aSub'>The current service has been supended</h3>
        <p className='Content aSub'>
          Contact the admin to resolve this <span className='reSub'>error</span>
        </p>
      </div>
    </>
  )
}