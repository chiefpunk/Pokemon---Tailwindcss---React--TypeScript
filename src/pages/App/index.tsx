import React from 'react';
import LoginPage from '../Login'
import PokemonPage from '../Pokemon'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem('isLoggedIn') || false)

    React.useEffect(()=>{
        localStorage.setItem('isLoggedIn', isLoggedIn);
    },[isLoggedIn])

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <LoginPage setIsLoggedIn={setIsLoggedIn} />
                </Route>
                <Route exact render={()=>isLoggedIn ? <PokemonPage /> : <Redirect to="/" />} path="/pokemon" />
            </Switch>
        </Router>
    );
}

export default App;
