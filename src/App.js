import "./App.css";
import Header from "./Comps/Header/Header";
import Menu from "./Comps/Menu/Menu";
import Dashboard from "./Comps/Dashboard/Dashboard";
import React, { useState } from "react";

const Loginpage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    props.setIsLogin(true);
    console.log(`Email: ${email}, Password: ${password}`);
  };
  return (
    <div id="loginPage">
      <div id="loginBox">
        <div id="loginDetail">
          <div id="mail">
            <input
              type="email"
              placeholder="Username"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div id="pass">
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div id="rememberMe">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>
          <div id="btn">
            <button type="button" onClick={handleLogin}>
              Log In
            </button>
          </div>
        </div>
        <div id="keyImg">
          <img src="key.png" alt="just a temp" />
        </div>
      </div>
    </div>
  );
};

function App() {

  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <div className="App">
        {!isLogin && <Loginpage setIsLogin={setIsLogin} />}
        {isLogin && (
          <>
            <Header setIsLogin={setIsLogin} />
            <div id="mainBody">
              <Menu />
              <Dashboard />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
