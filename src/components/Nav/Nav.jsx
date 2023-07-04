import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav(props) {
  const handleLogOut = () => {
    props.setAccess(false);
  };

  return (
    <div>
      <nav className={style.nav}>
        <button>
          <Link to={"/about"}>About</Link>
        </button>

        <button>
          <Link to={"/home"}>Home</Link>
        </button>

        <button onClick={handleLogOut}> Log Out</button>
        <SearchBar onSearch={props.onSearch} />
      </nav>
    </div>
  );
}

export default Nav;
