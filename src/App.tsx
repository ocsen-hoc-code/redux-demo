import React from "react";
import "./App.css";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import store from "./stores/store";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/todo-list">Todo List</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/todo-list" element={<TodoList/>} />
          <Route path="/counter" element={<Counter/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
