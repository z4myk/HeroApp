import React, { useMemo, useState } from 'react'
import {Navigate, useNavigate, Link} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import {startLoginWithEmailPassword, checkingAuthentication} from '../../store/auth/thunks'
import { useForm } from '../../heroes/helpers/useForm'
import { useDispatch, useSelector} from "react-redux";
export const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {email, password, onInputChange} = useForm({
    email: '' ,
    password: ''  
  })
  const [error, setError] = useState('');
  const { status } = useSelector((state) => state.auth);

  const isChecking = useMemo(() => status === 'checking', [status])

  const handleSubmit = (event) => {
    event.preventDefault();
    try{
      dispatch(startLoginWithEmailPassword({email, password}));
      navigate("/", {
        replace: true,
      });
    }catch(error){
      if(error.code === "auth/internal-error"){
        setError('Correo invalido')
    }else if(error.code === "auth/email-already-in-use"){
        setError('El correo ya se encuentra en uso')
    }else if(error.code === "auth/wrong-password"){
        setError('La contraseña es incorrecta')
    }else if(error.code === 'auth/invalid-email'){
      setError('El email es invalido')
    }else{
        setError(error.message);
    }
    }
  }
  

  return (

    <div className="container mt-5 fondoLogin">
      <div className="bg-danger border">
    <h1 className="text-center text-light ">Bienvenid@!</h1>
      </div>
    <hr />

    <form onSubmit={handleSubmit}>
    {error && <p className="alert alert-danger w-100 mt-2 text-center">{error}</p>}
    <span className="text-light">Ingrese su email<span className="text-danger"> *</span></span>
    <input type="text" className="form-control w-100 mb-2" name='email' value={email} onChange={onInputChange}  placeholder="ejemplo@ejemplo.com" required/>
    <span className="text-light">Ingrese su contraseña<span className="text-danger"> *</span></span>
    <input type="password" className="form-control w-100 mb-2" name='password' value={password} onChange={onInputChange} placeholder="******" required/>
    <button 
    className="btn btn-danger w-100"
    >
      Iniciar Sesión
      </button>
    </form>
      <Link to='/auth/register' className="text-light">
      <span className="text-light"><b>Crear una cuenta</b></span>
      </Link>
    </div>

  )
}
