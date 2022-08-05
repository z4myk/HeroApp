import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { DcPage } from '../heroes/pages/DcPage'
import { MarvelPage } from '../heroes/pages/MarvelPage'
import { HeroRoutes } from '../heroes/routes/HeroRoutes'
import { Navbar } from '../ui/components/NavBar'
export const AppRouter = () => {
  return (
    <> 

   
    <Routes>
      <Route path='login' element={<LoginPage />} />

      <Route path='/*' element={<HeroRoutes />} />
    </Routes>       
    </>
  )
}
