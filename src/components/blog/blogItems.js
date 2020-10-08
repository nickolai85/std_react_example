import React from "react";
import { Link } from "react-router-dom";

export default function(props){
  console.log('props',props);
  return(
      <div>
        <Link to={`/article/${props.item._id}`}>
            <h3>{props.item.title}</h3>
        </Link>
        <div>
            <div>
              <div>Autor:{props.item.autor}</div>
            </div>
            <div>
              <div>Posted at:{props.item.created_at}</div>
            </div>            

        </div>
      </div>
  )
}
 