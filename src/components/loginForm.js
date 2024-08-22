import React from 'react';

function LoginForm() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form id="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <input type="submit" value="Login" />
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
