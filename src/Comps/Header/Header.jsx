import "./style.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
const Header = (props) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  };

  const handleLogOut = (e)=>{
    props.setIsLogin(false);
  }
  return (
    <header>
      <div id="headerLogo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div id="headerBar">
        <div id="headerSearch">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleInputChange}
          />
        </div>
        <div id="iAMwhite"></div>
        <div id="headerNotify">
            <div id="headerNotifyIcon">
                <FontAwesomeIcon icon={faBell} style={{color: "#d8d8d8",}} size="xl"/>
            </div>
        </div>
        <div id="headerLoginInfo">
            <div id="headerLoginName">
                <p>Jenil Dobariya</p>
            </div>
            <div id="headerLoginImg">
                <img src="face.png" alt="LoginLogo"/>
            </div>
            <div id="headerLogOut">
              <button onClick={handleLogOut}>
                Log Out
              </button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
