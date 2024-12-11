import "../App.css";
import logo from "../images/logo.png";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src={logo} alt="logo" />
      <div className="nav-buttons">
        <button className="biz-login">BiZ Login</button>
        <button className="login">Login</button>
      </div>
    </div>
  );
};
export default Navbar;
