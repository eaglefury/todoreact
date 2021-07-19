import './App.css';
import React from 'react';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { CardWrapper } from './cardwrapper/cardwrapper';
//import { ProtectedRoute } from '../protected-route';
import { Login } from './login/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Register } from './register/register';
import { UserProvider } from '../providers/userprovider';
import { CardProvider } from '../providers/cardprovider';

function App() {
    return (
        <div>
            <UserProvider>
                <CardProvider>
                    <Router>
                        <Header></Header>
                        <Switch>
                            <Route
                                component={CardWrapper}
                                exact
                                path="/"
                            ></Route>
                            <Route path="/login" component={Login}></Route>
                            <Route
                                path="/register"
                                component={Register}
                            ></Route>
                        </Switch>
                        <Footer></Footer>
                    </Router>
                </CardProvider>
            </UserProvider>
        </div>
    );
}
export default App;
