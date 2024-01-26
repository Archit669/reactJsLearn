import React from 'react'
import "./Button.css"

function Button({color, textColor = "black", setColor}) {
  const buttonCustomStyle = {
    backgroundColor : color,
    color : textColor
  };

  return (
    <div className = "button" style={buttonCustomStyle} onClick={()=>setColor(color)}>
        {color}
    </div>
  )
}

export default Button;
