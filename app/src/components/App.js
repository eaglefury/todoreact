import './App.css';
import React from 'react';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { CardWrapper } from './cardwrapper/cardwrapper';
//import { ProtectedRoute } from '../protected-route';
import { Login } from './login/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Register } from './register/register';

function App() {
    return (
        <div>
            <Header></Header>
            <Router>
                <Switch>
                    <Route component={CardWrapper} exact path="/"></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                </Switch>
            </Router>
            <Footer></Footer>
        </div>
    );
}
export default App;
