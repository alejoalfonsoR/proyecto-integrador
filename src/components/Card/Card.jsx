import style from './Card.module.css'

export default function Card({
   name,
   status,
   species,
   onClose,
   gender,
   origin,
   image
}) {
   return (
      <div className={style.div}>
         <button className={style.btn} onClick={onClose}>X</button>
         <img className={style.image} src={image} alt={name} />
         <h4 className={style.name}>{name}</h4>

         <div className={style.data}>
         <h4>{species}</h4>
         <h4>{gender}</h4>
         {/* <h2>{status}</h2> */}
         {/* <h2>{origin}</h2> */}
         </div>

      </div>
   );
}
