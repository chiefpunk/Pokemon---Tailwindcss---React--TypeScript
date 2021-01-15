import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LoginPage from "../Login";
import PokemonPage from "../Pokemon";

import { PokemonProvider } from "../../context/PokemonsContext";

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache: new InMemoryCache(),
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    localStorage.getItem("isLoggedIn") || false
  );

  React.useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <ApolloProvider client={client}>
      <PokemonProvider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <LoginPage setIsLoggedIn={setIsLoggedIn} />
            </Route>
            <Route
              exact
              render={() =>
                isLoggedIn ? <PokemonPage /> : <Redirect to="/" />
              }
              path="/pokemon"
            />
          </Switch>
        </Router>
      </PokemonProvider>
    </ApolloProvider>
  );
}

export default App;
