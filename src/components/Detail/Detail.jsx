import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style  from "./Detail.module.css"

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});
  console.log(character);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.Div}>
      <div className={style.Detail}>

      <h2 className={style.name}>{character?.name}</h2>
      <h2>STATUS | {character?.status}</h2>
      <h2>SPECIE | {character?.species}</h2>
      <h2>GENDER | {character?.gender}</h2>
      <h2>ORIGIN | {character?.origin?.name}</h2>
      </div>

      <div className={style.img}>
      <img src={character?.image} alt={character?.name} />
      </div>
    </div>
  );
};

export default Detail;
