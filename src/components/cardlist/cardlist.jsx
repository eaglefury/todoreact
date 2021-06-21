import { useContext } from 'react';
import './cardlist.css';
import { CardContext } from '../../providers/cardprovider';
import { Card } from '../card/card';

export const CardList = () => {
    const {cards, updateCard} = useContext(CardContext);
    return ( 
        <div className="container">
            <div className="todo-column">
                {
                cards
                    .filter((x) => x.state === 'todo')
                    .map((card) => {
                        return (
                            <Card
                                key={card.id}
                                title={card.title}
                                description={card.description}
                                color="white"
                                onChange={updateCard}
                            ></Card>
                        );
                    })}
            </div>
            <div className="inprogress-column">
                {cards
                    .filter((x) => x.state === 'inprogress')
                    .map((card) => {
                        return (
                            <Card
                                key={card.id}
                                title={card.title}
                                description={card.description}
                                color="white"
                            ></Card>
                        );
                    })}
            </div>
            <div className="completed-column">
                {cards
                    .filter((x) => x.state === 'completed')
                    .map((card) => {
                        return (
                            <Card
                                key={card.id}
                                title={card.title}
                                description={card.description}
                                color="white"
                            ></Card>
                        );
                    })}
            </div>
        </div>
    );
};
