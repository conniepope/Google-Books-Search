import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/SavedPage";
import Search from "./pages/SearchPage";
import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/books" component={Search} />
          <Route exact path="/books/:id" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;