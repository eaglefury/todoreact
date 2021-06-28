import { CardContext } from '../../providers/cardprovider';
import { useContext, useState } from 'react';
import './addcard.css';

export const AddCard = () => {
    const { addCard } = useContext(CardContext);
    const [state, setState] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newCard = {
            id: Math.floor(Math.random() * 10000 + 1),
            title: state.title,
            description: state.description,
            state: state.state,
        };
        addCard(newCard);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="add-card-main">
                <h2>Add Card</h2>
                <label htmlFor="title">Title:</label>
                <input
                    className="txt-box"
                    id="title"
                    type="text"
                    onChange={(e) =>
                        setState({ ...state, title: e.target.value })
                    }
                ></input>
                <label htmlFor="description">Description:</label>
                <input
                    className="txt-box"
                    id="description"
                    type="text"
                    onChange={(e) =>
                        setState({ ...state, description: e.target.value })
                    }
                ></input>
                <label htmlFor="state">State:</label>
                <input
                    className="txt-box"
                    id="state"
                    type="text"
                    onChange={(e) =>
                        setState({ ...state, state: e.target.value })
                    }
                ></input>
                <button className="btn" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};
