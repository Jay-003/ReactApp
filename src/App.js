import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/loginForm';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ loggedIn, setLoggedIn ] = useState( false );
  const [ userData, setUserData ] = useState( {} );

  const handleLoginSubmit = ( formData ) => {
    setLoggedIn( true );
    setUserData( formData );
  };

  return (
    <Router>
      <div className="App container">
        <h1 className="mt-4">Welcome</h1>
        <Routes>
          <Route path="/" element={ !loggedIn ? <LoginForm onSubmit={ handleLoginSubmit } /> : <Profile userData={ userData } /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;