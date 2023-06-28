import React from "react";
import { useState } from "react";
import style from "./Searchbar.module.css";

const SearchBar = (props) => {
  const [id, setId] = useState("");

  // const handleChange = (event) => {
  //   const newValue = event.target.value;
  //   setId(newValue);
  // };
  return (
    <div className={style.div}>
      <input
        className={style.input}
        type="search"
        placeholder="Busca un personaje..."
        value={id}
        onChange={event =>{setId(event.target.value)}}
      />
      <button className={style.btn} onClick={() => props.onSearch(id)}>
        Agregar
      </button>
    </div>
  );
};

export default SearchBar;
