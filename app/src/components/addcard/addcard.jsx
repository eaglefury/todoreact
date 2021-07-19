import { CardContext } from '../../providers/cardprovider';
import { UserContext } from '../../providers/userprovider';
import { useContext, useState } from 'react';
import './addcard.css';
import axios from 'axios';

export const AddCard = () => {
    const { addCard } = useContext(CardContext);
    const { user } = useContext(UserContext);
    const [state, setState] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newCard = {
            title: state.title,
            description: state.description,
            state: state.state,
            user: user.userId,
        };
        setState();
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('state').value = '';

        axios
            .post('http://localhost:5070/api/notes/', newCard, {
                withCredentials: true,
            })
            .then((response) => {
                if (response.status === 201) {
                    addCard(response.data[0]);
                }
            });
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
