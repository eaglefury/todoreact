import { createContext, useReducer } from 'react';
import { userReducer } from './userreducer';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, dispatch] = useReducer(userReducer, {});

    const updateUser = ({ _id, firstName, lastName, email }) => {
        dispatch({
            type: 'update',
            payload: {
                firstName,
                lastName,
                email,
                userId: _id,
            },
        });
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
