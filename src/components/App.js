import './App.css';
import { CardList } from './cardlist/cardlist';
import {CardProvider} from '../providers/cardprovider';
import {Header} from '../components/header/header'
import {Footer} from '../components/footer/footer'

function App() {
    return (
        <div className="App">
            <container className="todo">
                <div>
                    <Header></Header>
                    <CardProvider>
                    <CardList></CardList>
                    </CardProvider>
                    <Footer></Footer>
                </div>
            </container>
            <container className="in-progress"></container>
        </div>
    );
}
export default App;
