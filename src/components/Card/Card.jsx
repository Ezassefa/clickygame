import React from "react";
import "../../data.json"


const Card = (props) => {
  return (
  
      <div className="card col-lg-3 col-md-6 col-sm-9" width="100%" >
        <div className="img-container">
        <img
        alt={"Character image" + props.id}
        src={props.image}
        onCLick={() => props.checkIfClicked(props.id)}
        />
        </div>
      </div>
    
  );
};
export default Card;
