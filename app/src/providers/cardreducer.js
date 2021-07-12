export const cardReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return { ...state, cards: [...state.cards, action.payload] };
        case 'update':
            const cardfound = state.cards.some(
                (x) => x.id === action.payload.id
            );
            if (cardfound) {
                state = {
                    ...state,
                    cards: [
                        ...(state.cards.filter(
                            (x) => x.id !== action.payload.id
                        )),
                        action.payload,
                    ],
                };
            }
            return state;
        case 'delete':
            return {
                ...state,
                cards: state.cards.filter((x) => x.id !== action.payload.id),
            };
        default:
            return state;
    }
};
