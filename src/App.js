import React from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import History from "./pages/History";
import Title from "./pages/Title";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="insmarts-testing/#/" element={<Title />} />
        <Route
          exact
          path="insmarts-testing/#/search"
          element={<SearchResults />}
        />
        <Route exact path="insmarts-testing/#/history" element={<History />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
