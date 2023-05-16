import React from "react";
import "./App.css";
// import { data } from "./helper/data";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="text-center mt-4">
      <Header />
      <CardContainer />
    </Container>
  );
}

export default App;
