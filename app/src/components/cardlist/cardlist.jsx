import { useContext } from 'react';
import './cardlist.css';
import { CardContext } from '../../providers/cardprovider';
import { Card } from '../card/card';
import { AddCard } from '../addcard/addcard';

export const CardList = () => {
    const { cards } = useContext(CardContext);
    return (
        <div className="main">
            <div className="add-card">
                <AddCard></AddCard>
            </div>
            <div className="main-content">
                <div className="todo-main">
                    <div className="colum-heading">
                        <h1>TODO</h1>
                    </div>
                    <div className="todo-column">
                        {cards
                            .filter((x) => x.state === 'todo')
                            .map((card) => {
                                return (
                                    <Card
                                        key={card.id}
                                        id={card.id}
                                        color="white"
                                    ></Card>
                                );
                            })}
                    </div>
                </div>
                <div className="inprogress-main">
                    <div className="colum-heading">
                        <h1>IN-PROGRESS</h1>
                    </div>
                    <div className="inprogress-column">
                        {cards
                            .filter((x) => x.state === 'inprogress')
                            .map((card) => {
                                return (
                                    <Card
                                        id={card.id}
                                        key={card.id}
                                        color="khaki"
                                    ></Card>
                                );
                            })}
                    </div>
                </div>
                <div className="completed-main">
                    <div className="colum-heading">
                        <h1>COMPLETED</h1>
                    </div>
                    <div className="completed-column">
                        {cards
                            .filter((x) => x.state === 'completed')
                            .map((card) => {
                                return (
                                    <Card
                                        id={card.id}
                                        key={card.id}
                                        color="lightgreen"
                                    ></Card>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};
