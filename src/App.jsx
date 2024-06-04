// import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import './App.css';
import { auth } from './firebase';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      }
      console.log('user in app', user);
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home userName={userName} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
