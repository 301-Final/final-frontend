import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

class App extends React.Component() {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route>
            </Route>
            <Route>
            </Route>
            <Route>
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
