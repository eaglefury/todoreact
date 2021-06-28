export const cardReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return { ...state, cards: [...state.cards, action.payload] };
        case 'update':
            console.log('update dispatch');
            const cardIndex = state.cards.findIndex(
                (x) => x.id === action.payload.id
            );
            console.log(action.payload);
            if (cardIndex) {
                state = {
                    ...state,
                    cards: [
                        ...state.cards.filter(
                            (x) => x.id !== action.payload.id
                        ),
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
