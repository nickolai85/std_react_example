import React from "react";


export default function(props){
  console.log('props',props);
  return(
      <div>
        <h3>{props.item.title}</h3>
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
 