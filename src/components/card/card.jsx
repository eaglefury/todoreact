import './card.css';
import {CardContext} from '../../providers/cardprovider';
import {useContext} from 'react';
export const Card = ({ id, title, description, color, onChange}) => {
  const {cards} = useContext(CardContext);
  const thisCard = cards.filter(x => x.id === id)[0];
    return (
        <div className="card"  draggable="true"
        tabIndex="0"
        style={{ background: color }}>
          <h3>{title}</h3>
            <div
                onKeyPress={(e) => {
                    console.log(e);
                    onChange({...thisCard, description: description + e.target.value});
                }}
            > 
                {description}
            </div>{' '}
        </div>
    );
};
