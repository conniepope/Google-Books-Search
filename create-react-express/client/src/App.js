import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedPage from "./pages/SavedPage";
import SearchPage from "./pages/SearchPage";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/books" component={SearchPage} />
          <Route exact path="/books/:id" component={SavedPage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;