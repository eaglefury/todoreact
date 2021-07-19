import axios from 'axios';
import { Route, useHistory } from 'react-router-dom';
import React from 'react';
export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const history = useHistory();
    const checkAuthorized = async () => {
        try {
            const response = await axios.get(
                'http://localhost:5070/api/user/isauthorized/',
                {
                    withCredentials: true,
                }
            );
            return response.status === 200;
        } catch (err) {
            return false;
        }
    };

    return (
        <Route
            {...rest}
            render={(props) => {
                checkAuthorized()
                    .then((isAutheticated) => {
                        if (isAutheticated === true) {
                            <Component {...rest} {...props} />;
                        } else {
                            history.push('/login');
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        history.push('/login');
                    });
            }}
        />
    );
};
