import { createContext, useReducer } from 'react';
import { cardReducer } from './cardreducer';

// const initialState = {
//     cards: [
//         {
//             id: 1,
//             title: 'Title 1',
//             description: 'Test Desscription jklasjkj  kasjklsajdlka kasjdkljd',
//             state: 'todo',
//         },
//         {
//             id: 2,
//             title: 'Title 2',
//             description: 'Test Desscription jklasjkj  kasjklsajdlka kasjdkljd',
//             state: 'inprogress',
//         },
//         {
//             id: 3,
//             title: 'Title 3',
//             description: 'Test Desscription jklasjkj  kasjklsajdlka kasjdkljd',
//             state: 'inprogress',
//         },
//         {
//             id: 4,
//             title: 'Title 4',
//             description: 'Test Desscription jklasjkj  kasjklsajdlka kasjdkljd',
//             state: 'todo',
//         },
//         {
//             id: 5,
//             title: 'Title 5',
//             description: 'Test Desscription jklasjkj  kasjklsajdlka kasjdkljd',
//             state: 'completed',
//         },
//         {
//             id: 6,
//             title: 'Title 6',
//             description: 'Test Desscription jklasjkj  kasjklsajdlka kasjdkljd',
//             state: 'todo',
//         },
//     ],
// };

export const CardContext = createContext({});

export const CardProvider = ({ children }) => {
    const [cardState, dispatch] = useReducer(cardReducer, { cards: [] });

    const addCard = ({ _id, title, description, state, user }) => {
        dispatch({
            type: 'add',
            payload: {
                _id,
                title,
                description,
                state,
                user,
            },
        });
    };

    const updateCard = ({ _id, title, description, state, user }) => {
        dispatch({
            type: 'update',
            payload: {
                _id,
                title,
                description,
                state,
                user,
            },
        });
    };

    const deleteCard = (_id) => dispatch({ type: 'delete', payload: { _id } });

    const clearCards = () => dispatch({ type: 'clear' });

    const getAllNotes = (notes) => {
        if (!cardState.cards || cardState.cards.length === 0)
            dispatch({ type: 'get-notes', payload: notes });
    };

    return (
        <CardContext.Provider
            value={{
                cards: cardState.cards,
                addCard,
                updateCard,
                deleteCard,
                clearCards,
                getAllNotes,
            }}
        >
            {children}
        </CardContext.Provider>
    );
};
