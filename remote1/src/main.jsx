import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/remote-home";
import Sample1 from "./views/sample1";
import Sample2 from "./views/sample2";
import { addInitListener } from "@luigi-project/client";

import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    addInitListener((context) => {
      console.log("main.jsx Luigi Client initialized.", context);
    });

    console.log("Initialized");
  }
  componentDidMount() {
    console.log('Componente montado!');

    const teste  = createRoot(document.getElementById('teste'))
    teste.render(
      <Home/>
    );
  }

  render() {
    return (
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/sample1" element={<Sample1/>} />
          <Route path="/sample2" element={<Sample2/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);