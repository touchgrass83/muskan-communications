import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/navbar.css";

import { faBolt, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">
          <FontAwesomeIcon className="bolt-icon" icon={faBolt} />
          Muskan Comm.
        </div>

        <nav>
          <a href="#">Shop</a>
          <a href="#">Repairs</a>
          <a href="#">Trade-in</a>
          <a href="#">Support</a>
        </nav>

        <div className="nav-icons">
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        </div>
      </div>
    </header>
  );
}
