export const cardReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return { ...state, cards: [...state.cards, action.payload] };
        case 'update':
            const cardIndex = state.cards.findIndex((x) => x.id === action.id);
            if (cardIndex) {
                state.cards[cardIndex] = {
                    ...action.payload,
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
