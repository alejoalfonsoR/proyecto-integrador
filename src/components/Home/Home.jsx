import React from "react";
import Cards from "../Cards/Cards";


const Home = (props) => {
  return (
    <div >
      
      <Cards characters={props.characters} onClose={props.onClose}/>
    </div>
  );
};
export default Home;
