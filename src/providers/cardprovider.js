import { createContext, useReducer } from 'react';
import { cardReducer } from './card-reducer';

const initialState = {
    cards: [
        {
            id: 1,
            title: 'Title 1',
            description: 'Test Desscription jklasjkj  kasjklsajdlka kasjdkljd',
            state: 'todo',
        },
        {
            id: 2,
            title: 'Title 2',
            description: 'Test Desscription jklasjkj  kasjklsajdlka kasjdkljd',
            state: 'inprogress',
        },
        {
            id: 3,
            title: 'Title 3',
            description: 'Test Desscription jklasjkj  kasjklsajdlka kasjdkljd',
            state: 'inprogress',
        },
        {
            id: 4,
            title: 'Title 4',
            description: 'Test Desscription jklasjkj  kasjklsajdlka kasjdkljd',
            state: 'todo',
        },
        {
            id: 5,
            title: 'Title 5',
            description: 'Test Desscription jklasjkj  kasjklsajdlka kasjdkljd',
            state: 'completed',
        },
        {
            id: 6,
            title: 'Title 6',
            description: 'Test Desscription jklasjkj  kasjklsajdlka kasjdkljd',
            state: 'todo',
        },
    ],
};

export const CardContext = createContext( initialState );

export const CardProvider = ({ children }) => {
    const [cardState, dispatch] = useReducer(cardReducer, initialState);

    const addCard = ({ id, title, description, state}) => {
        dispatch({
            type: 'add',
            payload: {
                id: id,
                title: title,
                description: description,
                state:state
            },
        });
    };

    const updateCard = ({ id, title, description, state }) => {
        console.log('in update');
        dispatch({
            type: 'update',
            payload: {
                id: id,
                title: title,
                description: description,
                state:state
            },
        });
    };

    const deleteCard = ({ id }) =>
        dispatch({ type: 'delete', payload: { id: id } });

    return (
        <CardContext.Provider
            value={{ cards: cardState.cards, addCard, updateCard, deleteCard }}
        >
            {children}
        </CardContext.Provider>
    );
};
