import './App.css';
import { CardList } from './cardlist/cardlist';
import { CardProvider } from '../providers/cardprovider';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { SidePanel } from './sidepanel/sidepanel';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
    return (
        <div className="App">
            <div className="todo">
                <div>
                    <DndProvider backend={HTML5Backend}>
                        <Header></Header>
                        <div className='allpanels'>
                        <div className='adminpanel'>
                        <SidePanel></SidePanel>
                        </div>
                        <div className='mainpanel'>
                        <CardProvider>
                            <CardList></CardList>
                        </CardProvider>
                        </div>
                        </div>
                        <Footer></Footer>
                    </DndProvider>
                </div>
            </div>
        </div>
    );
}
export default App;
