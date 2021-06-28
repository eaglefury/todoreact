import './cardlist.css';
import { CardColumn } from '../cardcolumn/cardcolumn';

export const CardList = () => {
    return (
        <div className="main">
            <div className="main-content">
                <CardColumn columnName="todo" cardColor="white"></CardColumn>
                <CardColumn
                    columnName="inprogress"
                    cardColor="yellow"
                ></CardColumn>
                <CardColumn
                    columnName="completed"
                    cardColor="green"
                ></CardColumn>
            </div>
        </div>
    );
};
