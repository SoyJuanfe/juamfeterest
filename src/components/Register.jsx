import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Data/Firebase';
import { useNavigate, Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuario registrado:', userCredential.user);
      navigate('/'); // Redirige al login después del registro
    } catch (error) {
      console.error('Error al registrarse:', error.message);
    }
  };

  return (
    <div className='Form__Container'>
      <div className='Logo'>
        <img className='Image' src={logo} alt="Logo" />
      </div>
      <div className='Form'>
        <form onSubmit={handleRegister}>
          <input
            className='Email__Password'
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
          <input
            className='Email__Password'
            type="password"
            placeholder='Confirmar contraseña'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className='SingIn' type="submit">Registrarse</button>
        </form>
        <div className='login-link-container'>
          <p>¿Ya tienes una cuenta? <Link to="/">Inicia sesión</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
