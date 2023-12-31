import React, { ReactDOM } from "react";

import { Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./component/Home.jsx";
import Products from "./component/Products.jsx";
import News from "./component/News.jsx";

const history = createBrowserHistory();

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="news" element={<News />} />
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>
);
