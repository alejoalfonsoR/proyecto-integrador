import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import axios from "axios";
// import characters from './data.jsx';

function App() {
  const [characters, setCharacters] = useState([]);

//   const onSearch = ()=>{
//    const newCharacters = {
//       id: 1,  //Se está repitiendo el ID casa vez que creo un personaje
//       name: "Rick Sanchez",
//       status: "Alive",
//       species: "Human",
//       gender: "Male",
//       origin: {
//         name: "Earth (C-137)",
//         url: "https://rickandmortyapi.com/api/location/1",
//       },
//       image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg"
//    }
//     setCharacters([...characters,newCharacters])
//   };

function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

function onClose(id){

}

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards characters={characters} />
    </div>
  );
}

export default App;
