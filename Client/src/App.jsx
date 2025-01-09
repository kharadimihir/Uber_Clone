import React from 'react'
import {Routes, Route } from "react-router-dom"
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import RiderLogin from './pages/RiderLogin'
import RiderSignUp from './pages/RiderSignUp'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import RiderHome from './pages/RiderHome'
import RiderProtectWrapper from './pages/RiderProtectWrapper'
import RiderLogout from './pages/RiderLogout'
import Riding from './pages/Riding'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/riding' element={<Riding />} />
        <Route path='/signup' element={<UserSignUp />} />
        <Route path='/rider-login' element={<RiderLogin />} />
        <Route path='/rider-signup' element={<RiderSignUp />} />
        <Route path='/home' element={<UserProtectWrapper>
          <Home />
        </UserProtectWrapper>} />
        <Route path='/user/logout' element={<UserProtectWrapper>
          <UserLogout />
        </UserProtectWrapper>} />
        <Route path='/rider-home' element={<RiderProtectWrapper>
          <RiderHome />
        </RiderProtectWrapper>} />
        <Route path='/riders/logout' element={<RiderProtectWrapper>
          <RiderLogout />
        </RiderProtectWrapper>} />
      </Routes>
    </div>
  )
}

export default App
