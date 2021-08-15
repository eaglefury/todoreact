import { UserContext } from '../../providers/userprovider';
import { useContext } from 'react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import './userpanel.css';
import { CardContext } from '../../providers/cardprovider';
import config from '../../config.json';

export const UserPanel = () => {
    const { user, updateUser } = useContext(UserContext);
    const { clearCards } = useContext(CardContext);
    const history = useHistory();
    const location = useLocation();

    const onLogoutClick = (e) => {
        axios
            .get(`${config['api-server']}/api/user/logout/`, {
                withCredentials: true,
            })
            .then((response) => {
                if (response.status === 200) {
                    updateUser({});
                    clearCards();
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
