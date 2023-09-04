import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChartColumn,
  faCircleQuestion,
  faComments,
  faGear,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
  return (
    <div id="menu">
      <div className="menus">
        <div className="icon">
          <FontAwesomeIcon
            icon={faChartColumn}
            size="lg"
            style={{ color: "#2e2e2e" }}
          />
        </div>
        <p>Dashboard</p>
      </div>
      <div className="menus">
        <div className="icon">
          <FontAwesomeIcon
            icon={faCartShopping}
            size="lg"
            style={{ color: "#2e2e2e" }}
          />
        </div>
        <p>Orders</p>
      </div>
      <div className="menus">
        <div className="icon">
          <FontAwesomeIcon
            icon={faUser}
            size="lg"
            style={{ color: "#2e2e2e" }}
          />
        </div>
        <p>Account</p>
      </div>
      <div className="menus">
        <div className="icon">
          <FontAwesomeIcon
            icon={faGear}
            size="lg"
            style={{ color: "#2e2e2e" }}
          />
        </div>
        <p>Settings</p>
      </div>
      <div id="menuSupport">
        <p>Support</p>
        <div id="supportMenu">
        <div className="supportMenus">
          <div className="icon">
            <FontAwesomeIcon
              icon={faComments}
              size="lg"
              style={{ color: "#2e2e2e" }}
            />
          </div>
          <p>Chat</p>
        </div>
        <div className="supportMenus">
          <div className="icon">
            <FontAwesomeIcon
              icon={faCircleQuestion}
              size="lg"
              style={{ color: "#2e2e2e" }}
            />
          </div>
          <p>FAQ</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
