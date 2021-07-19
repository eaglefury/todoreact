export const cardReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            const newState = {
                ...state,
                cards: [...state.cards, action.payload],
            };
            return newState;
        case 'update':
            const cardfound = state.cards.some(
                (x) => x._id === action.payload._id
            );
            if (cardfound) {
                const newState = {
                    ...state,
                    cards: [
                        ...state.cards.filter(
                            (x) => x._id !== action.payload._id
                        ),
                        action.payload,
                    ],
                };
                return newState;
            } else {
                return {
                    ...state,
                };
            }
        case 'delete':
            return {
                ...state,
                cards: state.cards.filter((x) => x._id !== action.payload._id),
            };
        case 'get-notes':
            return {
                ...state,
                cards: action.payload,
            };
        case 'clear':
            return {
                ...state,
                cards: [],
            };
        default:
            return state;
    }
};
