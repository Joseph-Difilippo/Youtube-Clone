import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SubHeader from "./components/SubHeader";
import Videos from "./components/Videos";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Sidebar />

        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <SubHeader />
              <Videos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
