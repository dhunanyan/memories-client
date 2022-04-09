import React from "react";
import { Routes, Route } from "react-router-dom";

import { Container } from "@material-ui/core";

import Navbar from "./components/nav-bar/nav-bar.component";
import Home from "./components/home/home.component";
import Auth from "./components/auth/auth.component";

const App = () => {
  return (
    <Container maxwidth="lg">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" exact element={<Auth />} />
      </Routes>
    </Container>
  );
};

export default App;
