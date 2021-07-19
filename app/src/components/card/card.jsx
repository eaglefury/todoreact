import './card.css';
import { CardContext } from '../../providers/cardprovider';
import { useContext } from 'react';
import { useDrag } from 'react-dnd';
import axios from 'axios';

export const Card = ({ id, color }) => {
    const { cards, updateCard, deleteCard } = useContext(CardContext);

    const setCard = (card) => {
        axios
            .put('http://localhost:5070/api/notes/', card, {
                withCredentials: true,
            })
            .then((response) => {
                if (response.status === 201) {
                    updateCard(card);
                }
            });
    };

    const killCard = (card) => {
        axios
            .delete('http://localhost:5070/api/notes/', {
                data: { ...card },
                withCredentials: true,
            })
            .then((response) => {
                if (response.status === 204) {
                    deleteCard(card._id);
                }
            });
    };

    const [dragObj, drag] = useDrag(
        () => ({
            type: 'CARD',
            item: { id },
            end: (item, monitor) => {
                const dropResult = monitor.getDropResult();
                if (item && dropResult) {
                    setCard({ ...card, state: dropResult.name });
                }
            },

            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
                handlerId: monitor.getHandlerId(),
            }),
        }),
        [cards]
    );

    const card = cards.filter((x) => x._id === id)[0];
    return (
        <div
            ref={drag}
            className="card"
            tabIndex="0"
            key={card._id}
            style={{ background: color }}
            onKeyDown={(e) => {
                setCard({ ...card, description: card.description + e.key });
            }}
        >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div style={{ color: 'red' }} onClick={() => killCard(card)}>
                x
            </div>
        </div>
    );
};
