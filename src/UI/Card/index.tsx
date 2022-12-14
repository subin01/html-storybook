import React from "react";
import './styles.css'
// import $ from 'blingblingjs'
import Button from '../Button'

export function Card({className, header, footer, content}){
  const headerContent = header? <div className="card__header">{header}</div> : null;
  const footerContent = footer? <div className="card__footer">{footer}</div> : null;
  return  (
    <article className={`card ${className}`}>
      {headerContent}
      {content}
      {footerContent}
      <Button label="save"/>
    </article>
    );
}

// export function init() {
//   const [card] = $(".card");
//   console.log("card", card)
//   card.on('click', (e)=> alert('clicked'))
// }