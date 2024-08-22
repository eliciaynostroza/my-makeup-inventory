import React from 'react';
import './App.css';
import LoginForm from './components/loginForm';

function App() {
  return (
    <div className="mainDiv">
      <h1 className="title">Welcome to My Makeup Diary</h1>
      <div className="loginDiv">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
