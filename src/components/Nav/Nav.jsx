import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";


function Nav(props) {
  return (
    <div >
      <nav className={style.nav}>
        <SearchBar onSearch={props.onSearch}/>
      </nav>
    </div>
  );
}

export default Nav;
