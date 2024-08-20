import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="mainDiv">
      <h1 class="title">Welcome to My Makeup Diary</h1>
      <div class="loginDiv"> 
      
      <div class="login-container">
        <h2>Login</h2>
        <form id="login-form">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" required></input>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required></input>
            </div>
            <input type="submit" value="Login"></input>
            <div class="forgot-password">
                <a href="#">Forgot Password?</a>
            </div>
        </form>
    </div>
      </div>
    </div>
  );
}

export default App;
