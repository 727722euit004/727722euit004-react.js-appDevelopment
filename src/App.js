// src/App.js
import React, { useState } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Menu from './pages/Menu';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Cart from './Components/Cart';
import Profile from './pages/Profile'; 
import { toast } from 'react-hot-toast';// Import the Profile component
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FoodList from './Components/Offer';
import PaymentPage from './pages/PaymentPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // Manage user state

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    toast.success("Logged Out"); // Ensure you import toast from 'react-hot-toast'
  };

  return (
    <div className="w-screen h-screen flex flex-col mt-[-60px]">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<FoodList />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />

       
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile user={user} onLogout={handleLogout} /> : <Navigate to="/login" replace />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
