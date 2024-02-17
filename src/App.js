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
        <Route exact path="/" element={<Title />} />
        <Route exact path="/search" element={<SearchResults />} />
        <Route exact path="/history" element={<History />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
