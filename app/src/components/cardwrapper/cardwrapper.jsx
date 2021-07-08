import './cardwrapper.css';
import { SidePanel } from '../sidepanel/sidepanel';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CardList } from '../cardlist/cardlist';
import { CardProvider } from '../../providers/cardprovider';

export const CardWrapper = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="allpanels">
                <div className="adminpanel">
                    <SidePanel></SidePanel>
                </div>
                <div className="mainpanel">
                    <CardProvider>
                        <CardList></CardList>
                    </CardProvider>
                </div>
            </div>
        </DndProvider>
    );
};
