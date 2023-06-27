import React from "react";
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input type="search" placeholder="Busca un personaje..."/>
        <button onClick={this.props.onSearch}>Agregar</button>
      </div>
    );
  }
}
