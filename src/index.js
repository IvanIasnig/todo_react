import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Completed from "./screen/completed";
import Home from "./screen/home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskContext from './context/taskContext';

function App() {
  const [taskArray, setTaskArray] = useState([]);

  return (
    <TaskContext.Provider value={{ taskArray, setTaskArray }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </BrowserRouter>
    </TaskContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

