import './card.css';
import { CardContext } from '../../providers/cardprovider';
import { useContext } from 'react';
export const Card = ({ id, color }) => {
    const { cards, updateCard, deleteCard } = useContext(CardContext);
    const card = cards.filter((x) => x.id === id)[0];
    return (
        <div
            className="card"
            draggable="true"
            tabIndex="0"
            style={{ background: color }}
            onKeyDown={(e) =>
                updateCard({ ...card, description: card.description + e.key })
            }
            onDragStart={(e) => e.dataTransfer.setData('cardId', card.id)}
        >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div style={{ color: 'red' }} onClick={() => deleteCard(card)}>
                x
            </div>
        </div>
    );
};
