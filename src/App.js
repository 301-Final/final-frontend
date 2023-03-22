import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Profile from "./components/Profile";
import Catalog from "./components/Catalog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={
                <Catalog />}></Route>
            <Route
              exact path="/about"
              element={<About />}></Route>
            <Route
              exact path="/profile"
              element={
                <Profile />}></Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
