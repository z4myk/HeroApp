import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { RegisterPage } from '../auth/pages/RegisterPage'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { HeroeRoutes } from '../heroes/heroRoutes/HeroeRoutes'
import { Navbar } from '../ui/components/NavBar'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import {useCheckAuth} from '../heroes/hooks/useCheckAuth'
import { CheckingAuth } from '../auth/CheckingAuth'
export const AppRouter = () => {

  const {status } = useCheckAuth()
if(status === 'checking') return <CheckingAuth />

  return (
    <> 
    <Routes>
    { 
          status === 'authenticated'
          ? <Route path='/*' element={<HeroeRoutes />} />
          : <Route path='/auth/*' element={<AuthRoutes />} />
        } 

        <Route path='/*' element={<Navigate to='/auth/login' />} />      

      {/* <Route path='login' element={
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      } />

      <Route path='/*' element={
        <PrivateRoute>
          <HeroeRoutes />
        </PrivateRoute>
      } /> */}
    </Routes>       
    </>
  )
}
