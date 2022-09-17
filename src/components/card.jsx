import React from 'react'
import cardCss from "../assets/card.module.css"
export default function card({ bg, header, number } ) {
  
  function getColor() {

    if(bg == "blue") return cardCss["cardBlue"]
    else if (bg == "green") return cardCss["cardGreen"]
    else if (bg == "red") return cardCss["cardRed"]
    else return cardCss["cardYellow"]
  }

  return (
    <div className={getColor()}>
     
      <h1 >{ header || ""}</h1>
      <strong className='text-xl'> { number || "" } </strong>
       
      <p>
        <span> Last Updated at : </span>
        
       
        <span>  Sat Sep 17 2022 00:21:17  </span>
       
      </p>

      <span> Number of infect cases of COVID-19 </span>
      </div>
  )
}
