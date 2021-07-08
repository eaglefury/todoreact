import { useContext } from 'react';
import './cardcolumn.css';
import { Card } from '../card/card';
import { CardContext } from '../../providers/cardprovider';
import { useDrop } from 'react-dnd';

export const CardColumn = ({ columnName, cardColor }) => {
    cardColor = cardColor || 'white';
    const { cards } = useContext(CardContext);

    // eslint-disable-next-line
    const [dropObj, drop] = useDrop(() => ({
        accept: 'CARD',
        drop: () => ({ name: columnName }),
    }));

    return (
        <div className="main-column">
            <div className="colum-heading">
                <h2>{columnName}</h2>
            </div>
            <div ref={drop} className="column">
                {cards
                    .filter((x) => x.state === columnName)
                    .map((card) => {
                        return (
                            <Card
                                key={card.id}
                                id={card.id}
                                color={cardColor}
                            ></Card>
                        );
                    })}
            </div>
        </div>
    );
};
