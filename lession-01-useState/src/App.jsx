import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./component/Header";
import Footer from "./component/Footer";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes>
        <Route path="/" element={<Outlet />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
