import React from "react";
import style from './Searchbar.module.css'


export default class SearchBar extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.div}>
        <input className={style.input} type="search" placeholder="Busca un personaje..."/>
        <button className={style.btn} onClick={this.props.onSearch}>Agregar</button>
      </div>
    );
  }
}
