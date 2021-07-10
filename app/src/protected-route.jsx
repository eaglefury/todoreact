import axios from 'axios';
import { Route, useHistory } from 'react-router-dom';
export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const authResponse = axios.get(
        'http://localhost:5070/api/user/isauthorized/'
    );

    const history = useHistory();

    return (
        <Route
            {...rest}
            render={(props) => {
                return authResponse.status === 200 ? (
                    <Component {...rest} {...props} />
                ) : (
                    history.push('/login')
                );
            }}
        ></Route>
    );
};
