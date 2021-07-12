export const userReducer = (state, action) => {
    switch (action.type) {
        case 'update': {
            if (!action.payload.firstName) {
                return {};
            } else {
                return { ...action.payload };
            }
        }
        default: {
            // do nothing
        }
    }
};
