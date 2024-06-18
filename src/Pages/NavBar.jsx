import { Link } from "react-router-dom";
import "../NavBar.css";
const NavBar = () => {
  return (
    <nav>
      <Link className="LOGO" to="/">
        <img src="/src/assets/react.svg" alt="Logo" />
        Home
      </Link>
      <ul>
        <li>
          <Link to="/about">درباره ما</Link>
        </li>
        <li>
          <Link to="/gallery">گالری تصاویر</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
