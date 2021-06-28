import './card.css';
import { CardContext } from '../../providers/cardprovider';
import { useContext } from 'react';
import { useDrag } from 'react-dnd';

export const Card = ({ id, color }) => {
    const { cards, updateCard, deleteCard } = useContext(CardContext);

    const [dragObj, drag] = useDrag(() => ({
        type: 'CARD',
        item: { id },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                updateCard({ ...card, state: dropResult.name });
            }
        },

        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));

    const card = cards.filter((x) => x.id === id)[0];
    return (
        <div
            ref={drag}
            className="card"
            tabIndex="0"
            style={{ background: color }}
            onKeyDown={(e) =>
                updateCard({ ...card, description: card.description + e.key })
            }
        >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div style={{ color: 'red' }} onClick={() => deleteCard(card)}>
                x
            </div>
        </div>
    );
};
