import Card from "./Card";

export default function Cards(props) {
  return (
    <div>
      {props.characters.map((pj) => {
        return (
          <Card
          key = {pj.id}
          name={pj.name}
          species={pj.species}
          onClose= {() => window.alert("Emulacion")}
          gender={pj.gender}
          status={pj.status}
          origin={pj.origin.name}
          image={pj.image}
          />
        );
      })}
    </div>
  );
}
