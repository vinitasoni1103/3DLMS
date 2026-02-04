import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div></div> {/* Empty div to balance flex space */}
      <h1>3D Model Viewer</h1>
      <Link to="/login" className="login-link">Login</Link>
    </header>
  );
};

export default Header;
