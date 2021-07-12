import { UserContext } from '../../providers/userprovider';
import { useContext } from 'react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import './userpanel.css';

export const UserPanel = () => {
    const { user, updateUser } = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const onLogoutClick = (e) => {
        axios
            .get('http://localhost:5070/api/user/logout/', {
                withCredentials: true,
            })
            .then((response) => {
                if (response.status === 200) {
                    updateUser({});
                    history.push('/login');
                }
            });
    };
    return (
        <div className="user-panel">
            {user && user.firstName && (
                <span className="welcome-message">
                    Welcome {user.firstName}
                </span>
            )}
            {user.firstName &&
                !(
                    location.pathname === '/login' ||
                    location.pathname === '/register'
                ) && (
                    <button className="logout-btn" onClick={onLogoutClick}>
                        Logout
                    </button>
                )}
        </div>
    );
};