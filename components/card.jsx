import React, { useState} from 'react';
import './card.css';

export  const Card = (props) => {
const [cardText, setCardText] = useState(props.cardText);
const color = props.color;

return (<><div className="card" draggable="true" tabIndex="0" style ={{background:color}}
onKeyPress={(e) => {
    console.log(e);
    setCardText(cardText + e.key);}}>
    {cardText}
    </div> </>);
};