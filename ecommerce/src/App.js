import React from "react";
// import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from "./components/screens/HomeScreen";
import SignupScreen from "./components/screens/SignupScreen";
import LoginScreen from "./components/screens/LoginScreen";

export default function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/login" element={<LoginScreen />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/signup" element={<SignupScreen />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
