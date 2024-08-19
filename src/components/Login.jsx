import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Data/Firebase';
import { useNavigate, Link } from 'react-router-dom';
import "../components/login.css";
import logo from "../assets/logo.png"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/gallery'); // Redirige a ImageGallery después de iniciar sesión
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
    }
  };

  return (
    <div className='Form__Container'>
      <div className='Logo'>
        <img className='Image' src={logo} alt="" />
      </div>
      <div className='Form'>
        <form onSubmit={handleLogin}>
          <input
            className='Email__Correo'
            type="email"
            placeholder='Correo electrónico'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='Email__Password'
            type="password"
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='SingIn' type="submit">Iniciar sesión</button>
        </form>
        <div className='register-link-container'>
          <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
