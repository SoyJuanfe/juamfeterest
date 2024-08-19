// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ImageGallery from './components/ImageGallery';
import ImageDetailPage from './components/ImageDetailPage';
import SavedImagePage from './components/SavedImagePages';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider, useAuth } from './Context/AuthContext';
import './App.css';

const ProtectedRoute = ({ element, ...rest }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/" />;
};

function App() {
  return (
    <div className='pagina-cel'>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/gallery"
              element={
                <ProtectedRoute
                  element={
                    <>
                      <Navbar />
                      <ImageGallery />
                    </>
                  }
                />
              }
            />
            <Route path="/image/:id" element={<ImageDetailPage />} />
            <Route path="/saved-images" element={<SavedImagePage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
