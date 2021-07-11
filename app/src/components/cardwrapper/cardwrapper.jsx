import './cardwrapper.css';
import { SidePanel } from '../sidepanel/sidepanel';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CardList } from '../cardlist/cardlist';
import { CardProvider } from '../../providers/cardprovider';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const CardWrapper = () => {
    const history = useHistory();
    const checkAuthorized = async () => {
        try {
            const response = await axios.get(
                'http://localhost:5070/api/user/isauthorized/',
                {
                    withCredentials: true,
                }
            );
            console.log(response);
            return response.status === 200;
        } catch (err) {
            return false;
        }
    };

    checkAuthorized().then((isAuthenticated) => {
        if (!isAuthenticated) {
            history.push('/login');
        }
    });

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="allpanels">
                <CardProvider>
                    <div className="adminpanel">
                        <SidePanel></SidePanel>
                    </div>
                    <div className="mainpanel">
                        <CardList></CardList>
                    </div>
                </CardProvider>
            </div>
        </DndProvider>
    );
};
