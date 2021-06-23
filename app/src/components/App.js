import './App.css';
import { CardList } from './cardlist/cardlist';
import {CardProvider} from '../providers/cardprovider';
import {Header} from '../components/header/header'
import {Footer} from '../components/footer/footer'

function App() {
    return (
        <div className="App">
            <div className="todo">
                <div>
                    <Header></Header>
                    <CardProvider>
                    <CardList></CardList>
                    </CardProvider>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}
export default App;
