import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({name,status,species,onClose,gender,origin,image,id,}) {
  return (
    <div className={style.div}>

      <button className={style.btn} onClick={() => onClose(id)}>X</button>

      <Link to={`/detail/${id}`}>
        <h4 className={style.name}>{name}</h4>
        <img className={style.image} src={image} alt={name} />

        <div className={style.data}>
          <h4>{species}</h4>
          <h4>{gender}</h4>
        </div>
      </Link>
      
    </div>
  );
}
