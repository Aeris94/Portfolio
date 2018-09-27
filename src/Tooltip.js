import React from 'react';

const Tooltip = (props) =>
{                                
  return(
    <div className="tooltip">   
     <p>{props.text.description}</p> 
     <ul> 
       {props.text.techno.map(item => <li>{item}</li>)}
     </ul> 
    </div> 
  )
}

export default Tooltip;