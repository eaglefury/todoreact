import './cardlist.css';
import { CardColumn } from '../cardcolumn/cardcolumn';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const CardList = () => {
    return (
        <div className="main">
            <div className="main-content">
                <DndProvider backend={HTML5Backend}>
                    <CardColumn
                        columnName="todo"
                        cardColor="white"
                    ></CardColumn>
                    <CardColumn
                        columnName="inprogress"
                        cardColor="yellow"
                    ></CardColumn>
                    <CardColumn
                        columnName="completed"
                        cardColor="green"
                    ></CardColumn>
                </DndProvider>
            </div>
        </div>
    );
};
