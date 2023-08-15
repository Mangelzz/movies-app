import "../sass/Navbar.scss";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/new-movies">Last Movies</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/popular-movies">Popular Movies</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/search">Search</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default Navbar;
