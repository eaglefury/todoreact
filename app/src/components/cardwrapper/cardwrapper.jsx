import './cardwrapper.css';
import { SidePanel } from '../sidepanel/sidepanel';
import { CardList } from '../cardlist/cardlist';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { CardContext } from '../../providers/cardprovider';
import { UserContext } from '../../providers/userprovider';
import config from '../../config.json';

export const CardWrapper = () => {
    const history = useHistory();
    const { user } = useContext(UserContext);
    const { getAllNotes, clearCards } = useContext(CardContext);

    useEffect(() => {
        if (user && user.userId) {
            axios
                .get(`${config['api-server']}/api/notes/${user.userId}`, {
                    withCredentials: true,
                })
                .then((response) => {
                    if (response.status === 200) {
                        getAllNotes(response.data);
                    }
                });
        } else {
            clearCards();
            history.push('/login');
        }
    });

    return (
        <div className="allpanels">
            <div className="adminpanel">
                <SidePanel></SidePanel>
            </div>
            <div className="mainpanel">
                <CardList></CardList>
            </div>
        </div>
    );
};
